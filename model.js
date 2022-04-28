import { Api } from './api.js'
import { View } from './view.js'


export const Model = ((api, view) => {



    class addSingleNewList {
        constructor(content, isCompleted = false, isEdited = false) {
            this.content = content;
            this.isCompleted = isCompleted;
            this.isEdited = isEdited;
        }
    }



    class State {

        #todolists = [];

        get todolists() {
            return this.#todolists;
        }



        set todolists(updateList) {

            this.#todolists = [...updateList];


            const pendingList = [];
            const completedList = [];


            [...updateList].forEach((list) => {

                if(!list.isCompleted) {
                    pendingList.push(list)
                } else {
                    completedList.push(list)
                }
            })


            const pendingTaskBox = document.querySelector(view.elementsClassAndIds.pendingBox)

            const updatedPendingBox = view.createPendingListBox(pendingList)

            view.render(pendingTaskBox, updatedPendingBox)





            const completedTaskBox = document.querySelector(view.elementsClassAndIds.completedBox)

            const updatedCompletedBox = view.createCompletedListBox(completedList)

            view.render(completedTaskBox, updatedCompletedBox)

        }


    }


    const getAllLists = api.getAllLists;
    const addNewList = api.addNewList
    const editList = api.editList;
    const deleteList = api.deleteList



    return {
       getAllLists,
       addNewList,
       editList,
       deleteList,
       addSingleNewList,
       State
    };
})(Api, View);