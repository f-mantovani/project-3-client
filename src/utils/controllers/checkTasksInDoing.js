const checkTasksInDoing = (tasks) => {

    let filteredTasks =  tasks.filter((task) => task.status === 'doing')

    if (filteredTasks.length === 0) {
        return false
    } else {
        return true
    }

}

export default checkTasksInDoing