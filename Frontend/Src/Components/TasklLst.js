export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li 
          key={task.id} 
          className={flex items-center justify-between p-3 mb-2 rounded ${task.completed ? 'bg-gray-100' : 'bg-white'} border}
        >
          <span 
            className={flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}}
            onClick={() => toggleTask(task.id)}
          >
            {task.title}
          </span>
          <button 
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700 ml-2"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
