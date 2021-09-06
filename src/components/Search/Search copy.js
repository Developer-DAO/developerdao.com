import React from "react";

import { getDefaultProvider, Contract } from "ethers";
import { NftProvider, useNft } from "use-nft";
import logo from "../../images/ddao_logo.jpeg";

const [developerId, setDeveloperId] = useState(1);

const ethersConfig = {
  ethers: { Contract },
  provider: getDefaultProvider("homestead"),
};

const updateDeveloperId = useCallback((e) => {
  if (e <= 8000) {
    setDeveloperId(e);
  }
}, []);
    
const Search = (props) => {
  
    return(
        <>
        <section className="text-gray-600 body-font bg-gray-50">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              src={logo}
              alt="hero"
              className="mb-5 w-32 h-32 object-cover object-center rounded-full"
            />
  
            <div className="text-center lg:w-2/3 w-full">
              <div className="flex justify-center">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  <h1 className="mb-6 text-xl text-center">
                    Search developer DAO id
                  </h1>
                  <input
                    placeholder="Search developer id"
                    value={developerId}
                    onChange={props.updateDID(e.target.value)}
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="w-full mb-6 bg-white bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <NftProvider fetcher={["ethers", ethersConfig]}>
              <Nft developerId={developerId} />
            </NftProvider>
          </div>
        </section>
      </>    )
}
    
const Nft = (developerId) => {
    const { loading, error, nft } = useNft(
      "0x25ed58c027921E14D86380eA2646E3a1B5C55A8b",
      developerId.developerId
    );
  
    if (loading) return <>Loading…</>;
  
    if (error || !nft) return <>Error.</>;
  
    return (
      <>
        <img
          className="border-4 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={nft.image}
        />
        <h1>{nft.name}</h1>
        <h2>Owner: {nft.owner}</h2>
  
        <h5 className="mt-10 text-m">Made by the developer DAO community: {' '}
        <a className="underline" href="https://github.com/thomasmetta/developer-dao" target="_blank" rel="noreferrer">
         Github</a></h5>
      </>
    );
  }



export default Search;

  