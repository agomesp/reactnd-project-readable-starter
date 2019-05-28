const api = 'http://localhost:3001'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever'
}

export const getAllPosts = () =>
  fetch('http://localhost:3001/posts', { headers })
    .then(res => res.json())
    .then(data => data)

export const getAllCategories = () =>
  fetch('http://localhost:3001/categories', { headers })
    .then(res => res.json())
    .then(data => data.categories)

export function getInitialData () {
  return Promise.all ([
    getAllPosts(),
    getAllCategories(),
  ]).then(([posts, categories]) => ({
    posts,
    categories,
  }))
}

export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)


export const postVote = (id, option) =>
	fetch(`${api}/posts/${id}`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			option
		})
	}).then(res => res.json())
.then(post => post)

export const getPostCategorie = (categorie) =>
  fetch(`${api}/${categorie}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const writePost = (id, author, title, body, category, timestamp) =>
	fetch(`${api}/posts`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id,
      author,
      title,
      body,
      category,
      timestamp
		})
	}).then(res => res.json())
    .then(post => post)
