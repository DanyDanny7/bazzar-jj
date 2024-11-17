import { PlusIcon } from '@heroicons/react/20/solid';
import Button from "@/components/util/Button";

export default function Empty({ loading, title, description, btnName, onClick = () => { } }) {
    return (
        <div className="w-full text-center flex flex-col items-center justify-center h-[300px]">
            {loading
                ? <div>
                    <svg className="animate-spin -ml-1 mr-3 h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                : <div className='flex flex-col justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.9} stroke="currentColor" className="size-24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>

                    <h3 className="mt-2 text-sm font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                    <div className="mt-6">
                        <Button
                            onClick={onClick}
                            type="button"
                            variant="contained"
                        >
                            <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
                            {btnName}
                        </Button>
                    </div>
                </div>

            }
        </div>
    )
}
