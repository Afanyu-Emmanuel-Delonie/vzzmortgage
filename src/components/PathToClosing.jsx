import React, {useState} from 'react'
import { HiHome } from 'react-icons/hi'
import { paths } from '../constants/constants'

function PathToClosing() {
     const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className='section py-10'>
        <div className="container justify-center">
           <h2 className='text-[#111111] text-center pb-15'>Choose <span className='text-yellow-500'>Your path</span> To Closing</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {paths.map((path) => (
                    <div 
                    key={path.id}
                    onMouseEnter={() => setHoveredId(path.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden border border-gray-100"
                    style={{
                        transform: hoveredId === path.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                    }}
                    >
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                   
                    <div className="flex items-center">
                        <div>
                        <div className="w-16 h-16 flex items-center justify-center text-[#102044]/30 transition-all duration-500 group-hover:rotate-6">
                            {path.icon}
                        </div>
                        </div>

                        {/* Badge */}
                        <div className="absolute top-4 right-4 z-10">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-[#102044] group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                            {path.badge}
                        </span>
                        </div>
                    </div>
                    
                    
                    <div className="relative z-10">
                        <h3 className="text-md font-medium text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                        {path.title}
                        </h3>
                    </div>
                    </div>
                ))}
                </div>

            
            <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
                Not sure which path is right for you? <a href="#" className="text-yellow-500 hover:text-yellow-600 font-semibold">Talk to an expert</a>
            </p>
            </div>
        </div>
    </section>
  )
}

export default PathToClosing