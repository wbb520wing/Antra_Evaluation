import { View } from './view.js';
import { Model } from './model.js';



export const Controller = ((model, view) => {

    //create a pointer to the class State from model
    const state = new model.State();




    //add input value to the pending list
    const addInputValue = () => {

        const addValBtn = document.querySelector(view.elementsClassAndIds.submitButton)

        const inputVal = document.querySelector(view.elementsClassAndIds.inputText);

        addValBtn.addEventListener('click', () => {

            const singleNewList = new model.addSingleNewList(inputVal.value)

            model.addNewList(singleNewList).then(list => {
                state.todolists = [list, ...state.todolists]
            });

        })

    };



    //delete the list
    const deleteSingleList = () => {


        const deletebtns = document.querySelectorAll(view.elementsClassAndIds.listContainer);

        for( const deletebtn of deletebtns){

        deletebtn.addEventListener('click', (event) =>{

            const btn = event.target.closest(view.elementsClassAndIds.deleteButton)

            const [className,id] = btn.className.split(' ');


            state.todolists = state.todolists.filter((list) => +list.id !== +btn.id)

            model.deleteList(btn.id)

        })
        }

    }





    //move list
    const moveLists = () => {

        const movebtns= document.querySelectorAll(view.elementsClassAndIds.listContainer)

        for (const movebtn of movebtns){

            movebtn.addEventListener('click', (event) => {

                const btn = event.target.closest(view.elementsClassAndIds.moveButton)


                const updatedList = [...state.todolists]

                const [className, id] = btn.className.split(' ');


                const moveList = state.todolists.find((list) => +list.id === +btn.id)

                moveList.isCompleted = !moveList.isCompleted;

                //update state
                state.todolists = [...updatedList]
                //update backend
                model.editList(btn.id, moveList.content, moveList.isCompleted);

         })
        }

    }



    const editList = () => {

        const editbtns = document.querySelectorAll(view.elementsClassAndIds.listContainer)


        for(const editbtn of editbtns) {

            editbtn.addEventListener('click', (event) => {

                const updatedList = [...state.todolists]

                const btn = event.target.closest(view.elementsClassAndIds.editButton);

                const [className, id] = btn.className.split(' ');

                const editList = state.todolists.find((list) => +list.id === +btn.id);

                editList.isEdited = !editList.isEdited


                //I have no idea how to detect the input value from the editing box
                //editList.content = ??????


                //update state
                state.todolists = [...updatedList]


            })

        }




    }




    const init = () => {
        model.getAllLists().then((list) => {
            state.todolists = list.reverse();
        });

    };


    const renderPage = () => {
        init(),
        addInputValue(),
        deleteSingleList(),
        moveLists(),
        editList()
    }


    return { renderPage };

})(Model, View);