import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie,PieChart } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Jan', value: 2400,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb', value: 1398,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar', value:9800,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr', value:3908,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May', value:4800,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun', value:3800,
          pv: 3800,
          amt: 2500,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Hello Shahrukh!</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>
<div className='ch_div container'>
    <h3 className='text'>Overview<span> (Half-Yearly)</span></h3>
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                </BarChart>

            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#ff3385"
                        label
                        />
                        <Tooltip />
                        <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
</div>

    <ResponsiveContainer>
    <table className='tab'>
        <thead>
            <th>Product Details</th>
            <th>Category</th>
            <th>Customer</th>
            <th>Alert</th>
        </thead>
        <tbody>
            <tr>
                <td><div className='pdt'><img src="https://media.istockphoto.com/id/1449175509/photo/abstract-3d-render.webp?b=1&s=170667a&w=0&k=20&c=hvpNvs47RWGaJoeT0blPUL7l8O-Rv8aWbQ1kpc804P4=" width={100} height={85}/><div className='hp'><h4>Abstract 3D</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div></td>
                <td>Vector-Model</td>
                <td>a1a1a1a1a1</td>
                <td>Ordered</td>
            </tr>
            <tr>
                <td><div className='pdt'><img src="https://media.istockphoto.com/id/1449175509/photo/abstract-3d-render.webp?b=1&s=170667a&w=0&k=20&c=hvpNvs47RWGaJoeT0blPUL7l8O-Rv8aWbQ1kpc804P4=" width={100} height={85} p-1/><div className='hp'><h4>Abstract 3D</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div></td>
                <td>Vector-Model</td>
                <td>b2b2b2b2b2</td>
                <td>Pending</td>
            </tr>
            <tr>
                <td><div className='pdt'><img src="https://media.istockphoto.com/id/1449175509/photo/abstract-3d-render.webp?b=1&s=170667a&w=0&k=20&c=hvpNvs47RWGaJoeT0blPUL7l8O-Rv8aWbQ1kpc804P4=" width={100} height={85}/><div className='hp'><h4>Abstract 3D</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div></td>
                <td>Vector-Model</td>
                <td>c3c3c3c3c3</td>
                <td>Ordered</td>
            </tr>
            <tr>
                <td><div className='pdt'><img src="https://media.istockphoto.com/id/1449175509/photo/abstract-3d-render.webp?b=1&s=170667a&w=0&k=20&c=hvpNvs47RWGaJoeT0blPUL7l8O-Rv8aWbQ1kpc804P4=" width={100} height={85}/><div className='hp'><h4>Abstract 3D</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div></td>
                <td>Vector-Model</td>
                <td>d4d4d4d4d4</td>
                <td>Dispatched</td>
            </tr>
            
        </tbody>
    </table>
    </ResponsiveContainer>
        
    </main>
  )
}

export default Home