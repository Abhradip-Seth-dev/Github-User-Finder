const ProfileSkeleton = () => {
    return (
      <div className=" animate-pulse w-190 max-w-2xl mx-auto p-6 space-y-6">
        
        {/* Top section */}
        <div className="flex gap-6">
          <div className="w-28 h-28 rounded-full bg-gray-200" />
  
          <div className="flex-1 space-y-4">
            <div className="h-6 w-2/3 bg-gray-200 rounded" />
            <div className="h-4 w-1/3 bg-gray-200 rounded" />
  
            <div className="space-y-2 mt-4">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
  
        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-20 rounded-lg bg-gray-200"
            />
          ))}
        </div>
  
        {/* List items */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded bg-gray-200" />
              <div className="flex-1 h-4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default ProfileSkeleton