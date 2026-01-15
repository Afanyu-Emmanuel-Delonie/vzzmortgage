import React from 'react'
import { newsArticles } from '../constants/constants'
import { ArrowDown, ArrowRight } from 'lucide-react'

function NewsLetters() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-[#102044]">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold text-[#111111] mb-3 group-hover:text-[#102044] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-[#102044] flex gap-1 items-center font-medium hover:text-yellow-500">
                    Read More 
                    <ArrowRight className='w-5 h-5' />
                  </button>
                </div>
              </div>
            ))}
          </div>
  )
}

export default NewsLetters