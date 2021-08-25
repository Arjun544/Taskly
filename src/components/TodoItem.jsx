// import { Accordion, AccordionItem } from "react-sanfona";

// import React from "react";

// const TodoItem = ({todos}) => {
//   return (
//     <Accordion isHovered={true}>
//       {todos.map((item) => {
//         return (
//           <AccordionItem title={`Item ${item}`} expanded={item === 1}>
//             <div
//               key={item.id}
//               className="flex flex-wrap h-20 items-center bg-bgColor-light border-none p-4 rounded-2xl shadow-sm justify-between justify-items-center hover:h-36"
//             >
//               <div className="flex items-center justify-center">
//                 <div className="mr-3">
//                   <input
//                     type="checkbox"
//                     checked={item.isCompleted}
//                     onChange={(e) => handleCheckbox(e, item)}
//                     className="checkbox mt-1 hover:border-amber-light"
//                   ></input>
//                 </div>
//                 <span
//                   className={
//                     item.isCompleted
//                       ? "line-through line font-medium overflow-hidden truncate w-32"
//                       : "font-medium overflow-hidden truncate w-32"
//                   }
//                 >
//                   {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
//                 </span>
//               </div>
//               <span className="font-medium text-xs text-gray-400">
//                 {moment(item.createdAt).format("lll")}
//               </span>

//               <TodoOptions
//                 todo={item}
//                 setTodoList={setTodoList}
//                 setIsEditing={setIsEditing}
//                 setCurrentTodo={setCurrentTodo}
//                 setFavList={setFavList}
//                 todoList={todoList}
//                 favList={favList}
//               />
//               <span>scheduled at</span>
//             </div>
//           </AccordionItem>
//         );
//       })}
//     </Accordion>
//   );
// };

// export default TodoItem;
