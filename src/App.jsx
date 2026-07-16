import { useState } from 'react'

function App() {
  const [keyword, setKeyword] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    setSearchTerm(keyword)
  }

  return (
    <div>
      <h1>电影搜索</h1>

      <div>
        <input type="text"
          placeholder="输入电影名"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key ==='Enter') {
              handleSearch()
            }
          }} />
        <button onClick={handleSearch}>搜索</button>
      </div>

      {searchTerm && <p>你搜了：{searchTerm}</p>}
    </div>
  )
}

export default App
