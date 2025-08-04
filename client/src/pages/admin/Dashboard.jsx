import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from './BlogTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
function Dashboard() {
    const [dashboardData, setDashboarddata] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentBlogs: []
    })
    const {axios} = useAppContext();
   
    const fetchData = async () => {
  try {
    // 🔁 API se admin dashboard data le rahe hain
    const { data } = await axios.get('/api/admin/dashboard');

    // ✅ Agar API response me success true hai
    data.success
      ? setDashboarddata(data.dashboardData) // 🧠 Dashboard data ko state me store karo
      : toast.error(data.message);           // ❌ Agar success false hai toh error dikhana
  } catch (error) {
    // 🛑 Agar API call me error aaya (e.g., network/server issue)
    toast.error(error.message); // ❗ Toast me error message dikhao
  }
};

    useEffect(() => {
        fetchData();
    }, [])
  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
  <div className='flex flex-wrap gap-4'>
    
    <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
      <img src={assets.dashboard_icon_1} alt="" />

      <div>
        <p className='text-xl font-semibold text-gray-600'>
          {dashboardData.blogs}
        </p>
        <p className='text-gray-400 font-light'>Blogs</p>
      </div>
    </div>

    <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
      <img src={assets.dashboard_icon_2} alt="" />

      <div>
        <p className='text-xl font-semibold text-gray-600'>
          {dashboardData.comments}
        </p>
        <p className='text-gray-400 font-light'>Comments</p>
      </div>
    </div>

    <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
      <img src={assets.dashboard_icon_3} alt="" />

      <div>
        <p className='text-xl font-semibold text-gray-600'>
          {dashboardData.drafts}
        </p>
        <p className='text-gray-400 font-light'>Drafts</p>
      </div>
    </div>

  </div>

<div>
    <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
        <img src={assets.dashboard_icon_4} alt="" />
        <p>Latest Blogs</p>
    </div>
    <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
  <table className='w-full text-sm text-gray-500'>
    <thead className='text-xs text-gray-600 text-left uppercase'>
      <tr>
        <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
        <th scope='col' className='px-2 py-4'>Blog Title</th>
        <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
        <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
        <th scope='col' className='px-2 py-4'>Actions</th>
      </tr>
    </thead>
    <tbody>
        {dashboardData.recentBlogs.map((blog, index) => {
            return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchData} index={index + 1}/>
        })}
    </tbody>
  </table>
</div>

</div>

</div>

  )
}

export default Dashboard