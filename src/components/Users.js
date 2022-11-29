import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiverUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
      <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
    </div>
    {
      showActiverUsers ? (<h2>Show Active Users</h2>) :( <h2>Show ALL Users</h2>)
    }
     </div>
  )
}

export default Users
