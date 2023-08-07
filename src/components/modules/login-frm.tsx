import { useForm, SubmitHandler } from 'react-hook-form'
import SpinnerIcon from '@/components/icons/spinner'
import type { AuthForm } from '@/lib/types'

export default function Form({
    errorMessage,
    isLoading,
    onSubmit,
}: {
    errorMessage: string,
    isLoading: boolean,
    onSubmit: (e: SubmitHandler<AuthForm>) => void
}) {
    const { register, formState: { errors }, handleSubmit } = useForm()

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-[25rem] shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        >
            <h3 className="text-2xl text-center mb-4">Inicio de Sesión</h3>
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Correo Electrónico
                </label>
                <input
                    {...register('username', { required: true })}
                    className="shadow appearance-none w-full border focus:shadow-outline py-2 px-3"
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
                    {...register('password', { required: true })}
                    className="shadow appearance-none w-full border focus:shadow-outline py-2 px-3"
                    type="password"
                    id="password"
                />
            </div>
            <p className="text-red-500 min-h-[10px] mb-4">{errorMessage}</p>
            <button 
                className="w-full bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded inline-flex justify-center items-center"
                disabled={isLoading}
                type="submit"
            >
                {isLoading ? (
                    <>
                        <SpinnerIcon className="h-5 w-5 mr-3" />
                        Iniciando...
                    </>
                ) : (
                    'Enviar'
                )}
            </button>
        </form>
    )
}