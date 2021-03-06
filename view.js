


export const View = (() => {


  const elementsClassAndIds = {
      pendingContainer: "#pending",
      completedContainer: "#completed",
      inputText: "#input_text",
      pendingBox: '.pending_lists',
      completedBox: '.completed_lists',
      submitButton: ".submit_btn",
      deleteButton: ".delete_btn",
      editButton: ".edit_btn",
      moveButton: ".move_btn",
      listContainer:'.list_container',
      listContent: '.list_content',
      updatedBox: '.updated_input'
  };


  const deleteIcon = `<svg focusable="false" aria-hidden="true" height='20' width='20'viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`;

  const editIcon = `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" height='20' width='20' aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`

  const rightArrowIcon = `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"data-testid="ArrowForwardIcon" aria-label="fontSize small"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>`

  const leftArrowIcon = `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" height='20' width='20' data-testid="ArrowBackIcon" aria-label="fontSize small"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>`



  const createPendingListBox = (arr) => {

            let box = "";

            arr.forEach((list) => {

                let updateInput = `<input type='text' id=${list.id} class='updated_input' />`

                if(list.isEdited){
                box += `
                <div class='single_box'>
                <li key=${list.id}>
                    <span class="list_content" id=${list.id}>${updateInput}</span>
                    <button class="edit_btn" id=${list.id}>${editIcon}</button>
                    <button class="delete_btn" id=${list.id}>${deleteIcon}</button>
                    <button class="move_btn" id=${list.id}>${rightArrowIcon}</button>

                </li>
                </div>
                `
                } else {
                    box += `
                    <div class='single_box'>
                    <li key=${list.id}>
                        <span class="list_content" id=${list.id}>${list.content}</span>
                        <button class="edit_btn" id=${list.id}>${editIcon}</button>
                        <button class="delete_btn" id=${list.id}>${deleteIcon}</button>
                        <button class="move_btn" id=${list.id}>${rightArrowIcon}</button>
                    </li>
                    </div>
                    `
                }

            })

            return box;

  }


  const createCompletedListBox = (arr) => {


            let box = "";

            arr.forEach((list) => {

                let updateInput = `<input type='text' id=${list.id} class='updated_input'/>`

                if(list.isEdited){
                box += `
                <div class='single_box'>
                <li key=${list.id}>
                    <button class="move_btn" id=${list.id}>${leftArrowIcon}</button>
                    <span class="list_content" id=${list.id}>${updateInput}</span>
                    <button class="edit_btn" id=${list.id}>${editIcon}</button>
                    <button class="delete_btn" id=${list.id}>${deleteIcon}</button>
                </li>
                </div>
                `} else {
                    box += `
                    <div class='single_box'>
                    <li key=${list.id}>
                        <button class="move_btn" id=${list.id}>${leftArrowIcon}</button>
                        <span class="list_content" id=${list.id}>${list.content}</span>
                        <button class="edit_btn"  id=${list.id}>${editIcon}</button>
                        <button class="delete_btn" id=${list.id}>${deleteIcon}</button>
                    </li>
                    </div>`
                }
    })

            return box;

  }




  const render = (ele, box) => {
    ele.innerHTML = box;
    };



  return {
      elementsClassAndIds,
      render,
      createPendingListBox,
      createCompletedListBox,

  };
})();