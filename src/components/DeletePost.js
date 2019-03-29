export default function deletePost(id,index,deleteFromArray){
	const url = `https://jsonplaceholder.typicode.com/posts/${id}`
	fetch(url,{
	   method: 'DELETE',
	 })
	  .then(response => {
	  	if(response.status===200){
	  		alert("Delete Success")
	  		deleteFromArray(index)
	  	}
	  })
}