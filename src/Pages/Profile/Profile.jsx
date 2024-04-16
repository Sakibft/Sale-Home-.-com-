import UseAuth from "../../Hooks/UseAuth";

 

const Profile = () => {
  const {user} = UseAuth();
  return (
    <div>
         <div className="mx-auto my-20   space-y-8 rounded-2xl  px-6 py-8 shadow-md    w-96 border hover:border-[#8EA7FF] duration-1000">
        {/* profile image & bg  */}
        <div className="relative ">
            <img width={350} height={150} className="h-[150px] w-[350px] rounded-2xl bg-gray-500" src="https://source.unsplash.com/350x150/?northern lights" alt="card navigate ui" />
            <img width={100} height={100} className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-[#8EA7FF] bg-gray-400  " src={user?.photoURL} alt="Nai"/>
        </div>
        {/* profile name & role */}
        <div className="space-y-1 pt-8 text-center">
            <h1 className="text-xl md:text-2xl">{user?.displayName}</h1>
            <p className="text-sm text-gray-400">{user?.email}</p>
        </div>
        {/* post , followers following  */}
        <div className="flex flex-wrap items-center justify-around px-4">
           
            <div className="text-center">
                <h5 className="text-xl font-medium">9.7k</h5>
                <p className="text-sm text-gray-400">Followers</p>
            </div>
            <div className="text-center">
                <h5 className="text-xl font-medium">217</h5>
                <p className="text-sm text-gray-400">Following</p>
            </div>
        </div>
        <div className="flex justify-center">
            <button className="t w-[80%] rounded-full py-2 font-medium text-gray-400   duration-500  hover:scale-95 hover:bg-[#8EA7FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;