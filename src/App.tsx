import React, { useState } from 'react';
import Modal from './Modal';

const App: React.FC = () => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        // <div className="flex flex-col items-center justify-center">
        //     <h1 className="text-3xl font-bold mb-6">Modal test!</h1>
        //     <button
        //         className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded"
        //         onClick={() => setIsOpen(true)}
        //     >
        //         Open Modal
        //     </button>
        //     <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        //         <h2 className="text-2xl text-white font-bold mb-4">Modal Title</h2>
        //         <p className="mb-4 text-white">
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        //             facilisi. Sed lacinia blandit velit, in luctus felis placerat at.
        //         </p>
        //         <div className="flex justify-end">
        //             <button
        //                 className="bg-slate-700 hover:bg-slate-600 font-bold text-white py-2 px-4 rounded"
        //                 onClick={() => setIsOpen(false)}
        //             >
        //                 Close Modal
        //             </button>
        //             <button
        //                 className="bg-slate-700 hover:bg-slate-600 font-bold text-white py-2 px-4 ml-4 rounded"
        //                 onClick={() => alert('Confirmed')}
        //             >
        //                 Confirm
        //             </button>
        //         </div>
        //     </Modal>
        // </div>
    );
};

export default App;
