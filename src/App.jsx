import { useState } from 'react'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

function App() {
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  const handleSearch = async () => {
    if (!keyword.trim()) return

    setLoading(true)

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&language=zh-CN`
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data.results)
    } catch (error) {
      console.error('搜索失败：', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>电影搜索</h1>

      <div>
        <input
          type="text"
          placeholder="输入电影名"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        />
        <button onClick={handleSearch}>搜索</button>
      </div>

      {loading && <p>加载中...</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} —— {movie.release_date?.slice(0, 4) || '未知'}年
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
