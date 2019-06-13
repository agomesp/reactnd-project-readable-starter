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

export function getPostAndComments(id) {
  return Promise.all ([
    getPost(id),
    getComments(id),
  ]).then(([post, comments]) => ({
      post,
      comments
  }))
}

export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(post => post)


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

export const deletePost = (id) =>
	fetch(`${api}/posts/${id}`, {
		method: 'DELETE',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id
		})
	}).then(res => res.json())
    .then(post => post)

export const editPost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      title,
      body
    })
  }).then(res => res.json())
    .then(post => post)

export const getComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)


export const commentVote = (id, option) =>
	fetch(`${api}/comments/${id}`, {
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

export const writeComment = (id, timestamp, body, author, parentId) =>
	fetch(`${api}/comments`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id,
      timestamp,
      body,
      author,
      parentId
		})
	}).then(res => res.json())
    .then(comment => comment)


export const editComment = (id, body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      body
    })
  }).then(res => res.json())
    .then(comment => comment)


export const deleteComment = (id) =>
	fetch(`${api}/comments/${id}`, {
		method: 'DELETE',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id
		})
	}).then(res => res.json())
    .then(comment => comment)
