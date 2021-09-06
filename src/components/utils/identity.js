import CeramicClient from '@ceramicnetwork/http-client'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { IDX } from '@ceramicstudio/idx'
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import { DID } from 'dids'

const ceramicProvider = CeramicClient.default ? CeramicClient.default : CeramicClient;
const threeIdProvider = ThreeIdResolver.default ? ThreeIdResolver.default : ThreeIdResolver;

async function client({
  endpoint = "https://ceramic-clay.3boxlabs.com",
  resolvers = null,
  address = '',
  provider = null,
  ceramicClient = null
} = {}) {
  let ceramic;
  let ethereum = window.ethereum;

  if (!ethereum) return {
    error: "No ethereum wallet detected"
  }

  if (!ceramicClient) {
    ceramic = new ceramicProvider(endpoint)
  } else {
    ceramic = ceramicClient
  }

  if (!resolvers) {
    resolvers = {
      ...threeIdProvider.getResolver(ceramic)
    }
  } else {
    resolvers = resolvers.reduce((acc, next) => {
      if (next.requiresCeramic) {
        let resolver = next.resolver.call(this, ceramic)
        acc = {
          ...acc,
          ...resolver
        }
      } else {
        acc = {
          ...acc,
          ...next.resolver
        }
      }
      return acc
    }, {})
  }

  if (!address) {
    const addresses = await ethereum.request({ method: 'eth_requestAccounts' })
    address = addresses[0]
  }

  const threeIdConnect = new ThreeIdConnect()

  if (!provider) {
    provider = new EthereumAuthProvider(ethereum, address)
  }

  await threeIdConnect.connect(provider)

  const did = new DID({
    provider: threeIdConnect.getDidProvider(),
    resolver: resolvers
  })

  ceramic.setDID(did) 
  await ceramic.did.authenticate()
  const idx = new IDX({ ceramic })

  return {
    ceramic, did, idx, error: null
  }
}

async function readOnlyClient({
  endpoint = "https://ceramic-clay.3boxlabs.com",
  ceramicClient = null,
} = {}) {
  let ceramic;
  let ethereum = window.ethereum;

  if (!ethereum) return {
    error: "No ethereum wallet detected"
  }

  if (!ceramicClient) {
    ceramic = new ceramicProvider(endpoint)
  } else {
    ceramic = ceramicClient
  }

  const idx = new IDX({ ceramic })
  return {
    idx, ceramic, error: null
  }
}

const networks = {
  ethereum: 'ethereum',
  bitcoin: 'bitcoin',
  cosmos: 'cosmos',
  kusama: 'kusama'
}

const caip10Links = {
  ethereum: "@eip155:1",
  bitcoin: '@bip122:000000000019d6689c085ae165831e93',
  cosmos: '@cosmos:cosmoshub-3',
  kusama: '@polkadot:b0a8d493285c2df73290dfb7e61f870f'
}

/*
CAIP-10 Account IDs is a blockchain agnostic way to describe an account on any blockchain. This may be an externally owned key-pair account, or a smart contract account. IDX uses CAIP-10s as a way to lookup the DID of a user using a caip10-link streamType in Ceramic. Learn more in the Ceramic documentation.
*/
async function getRecord({
  endpoint = "https://ceramic-clay.3boxlabs.com",
  network = 'ethereum',
  ceramicClient = null,
  schema = 'basicProfile'
} = {}) {
  let ceramic;
  let ethereum = window.ethereum;
  let record;

  if (!ethereum) return {
    error: "No ethereum wallet detected"
  }

  if (!ceramicClient) {
    ceramic = new ceramicProvider(endpoint)
  } else {
    ceramic = ceramicClient
  }

  if (network === networks.ethereum) {
    const addresses = await ethereum.request({ method: 'eth_requestAccounts' })
    const address = addresses[0]
    const idx = new IDX({ ceramic })
    const data = await idx.get(schema, `${address}${caip10Links.ethereum}`)
    record = data
  }
  return {
    record, error: null
  }
}

export {
  getRecord,
  readOnlyClient,
  client
}