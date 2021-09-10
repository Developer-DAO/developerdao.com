import React from "react";

const Profile = (props) => {

    return(
        <div>
        <div style={{ paddingTop: 50, width: 500, margin: '0 auto', display: 'flex', flex: 1 }}>
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-5xl text-center">
              Decentralized Identity
            </h1>
            <p className="text-xl text-center mt-2 text-gray-400">An authentication flow built with Ceramic & IDX</p>

            {
              Object.keys(props.profile).length ? (
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold mt-6">{props.profile.name}</h2>
                  <p className="text-gray-500 text-sm my-1">{props.profile.bio}</p>
                  <p className="text-lg	text-gray-900">Follow me on Twitter - @{props.profile.twitter}</p>
                </div>
              ) : null
            }

          {
            !props.loaded && (
              <>
              <button
              onClick={props.onAuthenticate}
              className="pt-4 shadow-md bg-purple-800 mt-4 mb-2 text-white font-bold py-2 px-4 rounded"
            >Authenticate</button>
            
            <button className="pt-4 shadow-md bg-blue-500 mb-2 text-white font-bold py-2 px-4 rounded" onClick={props.onProfileRead}>Read Profile</button>
            </>
            )
          }
          {
            props.loaded && props.showGreeting && (
              <p className="my-4 font-bold text-center">You have no profile yet. Please create one!</p>
            )
          }
          {
            props.loaded && (
              <>
                <input className="pt-4 rounded bg-gray-100 px-3 py-2" placeholder="Name" onChange={e => props.onNameChange(e.target.value)} />
                <input className="pt-4 rounded bg-gray-100 px-3 py-2 my-2" placeholder="Bio" onChange={e => props.onBioChange(e.target.value)} />
                <input className="pt-4 rounded bg-gray-100 px-3 py-2" placeholder="Twitter username" onChange={e => props.setTwitter(e.target.value)} />
                <button className="pt-4 shadow-md bg-green-500 mt-2 mb-2 text-white font-bold py-2 px-4 rounded" onClick={props.onProfileSave}>Update Profile</button>
                <button className="pt-4 shadow-md bg-blue-500 mb-2 text-white font-bold py-2 px-4 rounded" onClick={props.onProfileRead}>Read Profile</button>
              </>
            )
          }
        </div>
      </div>
    </div>
    )
}
  
export default Profile;
    


