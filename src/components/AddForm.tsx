

type AddFormProps = {
 addNewTask: (title: string) => void
}

function AddForm({addNewTask}: AddFormProps) {

    const newTaskHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            // Дописать проверку на наличие данных в инпуте
            addNewTask(event.currentTarget.value)
            event.currentTarget.value = ''
        }
    }

    return (
        <div className="add-form">
            <input onKeyDown={newTaskHandler} placeholder="Введите новую задачу"/>
        </div>
    )
}

export default AddForm