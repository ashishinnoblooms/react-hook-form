import { useForm } from 'react-hook-form'
import { Stack, TextField } from '@mui/material'
import { Schema, schema } from '../types/schema'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Users() {
    const { register, formState: { errors } } = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(schema)
    })

    return <>
        <Stack sx={{ gap: 2 }}>
            <TextField {...register('name')} label="Name" error={!!errors.name} />
            <TextField {...register('email')} label="E-mail" error={!!errors.email} />
        </Stack>
    </>
}
