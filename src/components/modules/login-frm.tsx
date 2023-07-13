import { FormEvent } from 'react'

export default function Form({
    errorMessage,
    onSubmit,
}: {
    errorMessage: string,
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}) {
    return (
        <form 
            onSubmit={onSubmit}
            className="w-full md:w-[25rem] shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        >
            <h3 className="text-2xl text-center mb-4">Inicia Sesión</h3>
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Correo Electrónico
                </label>
                <input
                    className="shadow appearance-none w-full border focus:shadow-outline py-2 px-3"
                    name="username"
                    type="text"
                    placeholder="your@email.com"
                    id="email"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="password"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Contraseña
                </label>
                <input
                    className="shadow appearance-none w-full border focus:shadow-outline py-2 px-3"
                    name="password"
                    type="password"
                    id="password"
                />
            </div>
            {errorMessage && <p className="text-red">{errorMessage}</p>}
            <button 
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                type="submit"
            >
                Enviar
            </button>
        </form>
    )
}