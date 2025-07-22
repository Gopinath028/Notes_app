import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBin";
import { findNotesInImportant } from "../../utils/findNotesInImportant";

export const NotesCard = ({ id, title, text, isPinned }) => {
    const { notesDispatch, archive, bin, important } = useNotes();

    const isNotesInArchive = findNotesInArchive(archive, id);
    const isNotesInBin = findNotesInBin(bin, id);
    const isNotesInImportant = findNotesInImportant(important, id);

    const onPinClick = () => {
        notesDispatch({
            type: isPinned ? 'UNPIN' : 'PIN',
            payload: { id }
        });
    };

    const onArchiveClick = () => {
        notesDispatch({
            type: isNotesInArchive ? 'REMOVE_FROM_ARCHIVE' : 'ADD_TO_ARCHIVE',
            payload: { id }
        });
    };

    const onDeleteClick = () => {
        notesDispatch({
            type: isNotesInArchive ? 'DELETE_FROM_ARCHIVE' : 'DELETE_NOTE',
            payload: { id }
        });
    };

    const onRestoreClick = () => {
        notesDispatch({
            type: 'RESTORE_FROM_BIN',
            payload: { id }
        });
    };

    const onClickImportant = () => {
        notesDispatch({
            type: 'TOGGLE_IMPORTANT',
            payload: { id }
        });
    };

    const onClickRemove = () => {
        notesDispatch({
            type: 'REMOVE_FROM_IMPORTANT',
            payload: { id }
        })
    }

    return (
        <div className="w-56 border border-neutral-800 p-2 rounded-sm shadow-md w-[300px]" key={id}>
            <div className="flex justify-between border-b-2">
                <p>{title}</p>

                {
                    !isNotesInArchive && !isNotesInBin && !isNotesInImportant && (
                        <button onClick={onPinClick}>
                            <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>
                                push_pin
                            </span>
                        </button>
                    )
                }
            </div>

            <div className="flex flex-col">
                <p>{text}</p>

                <div className="mt-6 flex justify-between items-center w-full">


                    <div>
                        {!isNotesInBin && isNotesInImportant ? (

                            <button onClick={onClickRemove}>
                                <span className="material-icons">
                                    label_important
                                </span>
                            </button>) : !isNotesInBin ?

                            (<button onClick={onClickImportant}>
                                <span className="material-icons">
                                    label_important_outline
                                </span>
                            </button>

                            ) : null
                        }
                    </div>



                    <div className="flex gap-3">
                        {
                            !isNotesInImportant && !isNotesInBin && (
                                <button onClick={onArchiveClick}>
                                    <span className={isNotesInArchive ? 'material-icons' : 'material-icons-outlined'}>
                                        archive
                                    </span>
                                </button>
                            )
                        }

                        <div>
                            {
                                !isNotesInImportant && isNotesInBin ? (
                                    <button onClick={onRestoreClick}>
                                        <span className="material-icons-outlined">restore_from_trash</span>
                                    </button>
                                ) : !isNotesInImportant ? (
                                    <button onClick={onDeleteClick}>
                                        <span className="material-icons-outlined">delete</span>
                                    </button>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
