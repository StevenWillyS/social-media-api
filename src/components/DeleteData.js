export default function deleteData(targetData,id,index,deleteFromArray){
	const url = `https://jsonplaceholder.typicode.com/${targetData}/${id}`
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