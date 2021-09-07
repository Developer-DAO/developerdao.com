import "./App.css";
import React, {useState, useRef} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { getDefaultProvider, Contract } from "ethers";

import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";

import {
  client,
  getRecord
} from "./components/utils/identity";

function App() {

  const ethersConfig = {
    ethers: { Contract },
    provider: getDefaultProvider("homestead"),
  };

  const [bio, setBio] = useState('')
  const [twitter, setTwitter] = useState('')
  const [name, setName] = useState('')
  const [profile, setProfile] = useState({})
  const [localDid, setDid] = useState(null)
  const [idxInstance, setIdxInstance] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const idxRef = useRef(null)
  const didRef = useRef(null)
  idxRef.current = idxInstance
  didRef.current = localDid

  async function connect() {
    const cdata = await client()
    const { did, idx, error } = cdata
    if (error) {
      console.log('error: ', error)
      return
    }
    setDid(did)
    setIdxInstance(idx)
    const data = await idx.get('basicProfile', did.id)
    if (data) {
      setProfile(data)
    } else {
      setShowGreeting(true)
    }
    setLoaded(true)
  }

  async function updateProfile() {
    if (!twitter && !bio && !name) {
      console.log('error... no profile information submitted')
      return
    }
    if (!idxInstance) {
      await connect()
    }
    const user = {...profile}
    if (twitter) user.twitter = twitter
    if (bio) user.bio = bio
    if (name) user.name = name
    await idxRef.current.set('basicProfile', user)
    setLocalProfileData()
    console.log('profile updated...')
  }

  async function readProfile() {
    try {
      const { record } = await getRecord()
      if (record) {
        setProfile(record)
      }
    } catch (error) {
      setShowGreeting(true)
    }
    setLoaded(true)
  }

  async function setLocalProfileData() {
    try {
      const data = await idxRef.current.get('basicProfile', didRef.current.id)
      if (!data) return
      setProfile(data)
      setShowGreeting(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
    <section className="text-gray-600 body-font bg-gray">
    <Router>
    <div className="container flex flex-col h-screen w-screen">
      <Menu
        onAuthenticate={connect}
        loaded={loaded}
      />

      <div className="flex-1 overflow-y-auto w-screen flex flex-col items-center justify-top"> 
          <Switch>
            <Route path="/profile">
              <Profile
                onAuthenticate={connect}
                onProfileRead={readProfile}
                onProfileSave={updateProfile}
                onNameChange={setName}
                onBioChange={setBio}
                profile={profile}
                loaded={loaded}
                showGreeting={showGreeting}
                /></Route>
            <Route path="/"><Search ethersConfig={ethersConfig}/></Route>
          </Switch>
      </div>
    </div>
    </Router>
    </section>
    </>
  );
}


export default App;
