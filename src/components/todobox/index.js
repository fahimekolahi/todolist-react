import trash from './trash3-fill.svg'
import edit from './pencil-square.svg'
const TodoBox = ({ id, todoText, deleteFunction }) => {
    return (

        <div className="flex  justify-between px-3 w-[90%] md:text-[1.2rem] bg-gray-500 my-1 mx-auto rounded-[3px]">
            <p className="text-white">
                {todoText}
            </p>
            <div className='flex gap-2'>
                <button onClick={() => deleteFunction(id)} className="text-white "><img src={trash} alt='trash' className='w-[18px] h-[18px] md:w-[24px] h-[24px]'/></button>
                <button><img src={edit} alt='edit' className='w-[18px] h-[18px] md:w-[24px] h-[24px]'/></button>

            </div>
        </div>


    )
}

export default TodoBox