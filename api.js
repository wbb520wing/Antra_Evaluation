export const Api = (() => {

  const baseUrl = 'http://localhost:3000';
  const path = "todos";


  const getAllLists = () => fetch([baseUrl, path].join("/")).then((res) => res.json());



  const addNewList = (newlist) =>
      fetch([baseUrl, path].join("/"), {
          method: "POST",
          body: JSON.stringify(newlist),
          headers: {
              "Content-Type": "application/json",
          }
      })
          .then((res) => res.json());


  const editList = (id, content, isCompleted) =>
    fetch([baseUrl, path, id].join("/"), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: content,
            isCompleted: isCompleted

        })
    }).then((res) => res.json());



  const deleteList = (id) =>
      fetch([baseUrl, path, id].join("/"), {
          method: "DELETE",
      });


  return {
      getAllLists,
      addNewList,
      editList,
      deleteList
  };

})()