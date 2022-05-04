import CardPlato from '../../design.system/CardPlato'
import CustomCheckboxPlato from '../../design.system/CustomCheckboxPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import DotPlato from '../../design.system/DotPlato'
import { Body } from '../../design.system/text.styling/styles'
import OutsideClicker from '../OutsideClicker'
import MenuCollapsable from '../MenuCollapsable'
import TaskDotMenu from './TaskDotMenu'
import useCollapseMenu from '../../utils/controllers/useCollapseMenu'
import useTaskMover from '../../utils/controllers/useTaskMover'
import { useState } from 'react'
import CheckPlato from '../../design.system/CheckPlato'
import useEditTask from '../../utils/controllers/useEditTask'


const TaskCard = ({ title, status, id }) => {

  const { isOpen, setIsOpen, handleCollapse } = useCollapseMenu()
  const { clickMover } = useTaskMover()
  const [edit, setEdit] = useState(false)
  const { newTask, handleTaskInput, editTitle } = useEditTask(title, id)
  
  return (
    <>
    {edit ? 
      (<CardPlato muted>
        <CustomCheckboxPlato>
          <input
            type='checkbox'
            id='add-new-task'
            className='custom-checkbox'
          />
          <input
            type='text'
            className='task-add body'
            value={newTask}
            onChange={(e) => handleTaskInput(e)}
            autoFocus
          />
          <label htmlFor='add-new-task' className='task-label'></label>
        </CustomCheckboxPlato>
        {newTask.length ? (<CheckPlato onClick={() => {editTitle(); setEdit(false)}}></CheckPlato>) : null }
      </CardPlato>) 
        
      :

      (<CardPlato className='task-card'>
        <span onClick={() => {clickMover(status, id)}}></span>
        <CustomCheckboxPlato checkable >
          <input type='checkbox' id={id} className='custom-checkbox' checked={status === 'done'} readOnly />
          <label
            htmlFor={id}
            className='task-label'
          >
            <Body done={status === 'done'}  muted={status === 'done'} >{title}</Body>
          </label>
        </CustomCheckboxPlato>
        <ColumnContainer kebab='true' onClick={() => handleCollapse()}>
          <DotPlato />
          <DotPlato />
          <DotPlato />
          <OutsideClicker isOpen={isOpen} setIsOpen={setIsOpen}>
            <MenuCollapsable>
              <TaskDotMenu id={id} status={status} setEdit={setEdit}/>
            </MenuCollapsable>
          </OutsideClicker>
        </ColumnContainer>
      </CardPlato>)
      }
    </>
  )
}

export default TaskCard
