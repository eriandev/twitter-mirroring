<script>
  import Input from '@/components/atoms/Input.svelte'
  import Button from '@/components/atoms/Button.svelte'
  import { useAuth } from '@/hooks'

  let name = ''
  let user = ''
  let loading = false
  let inputErrors = {
    name: false,
    user: false,
  }

  const { login } = useAuth()

  async function tryLogin() {
    if (loading) return

    loading = true
    inputErrors.name = false
    inputErrors.user = false

    try {
      const { error } = await login({ name, user })
      if (error) {
        inputErrors[error.param] = true
        return
      }
    } finally {
      loading = false
    }
  }
</script>

<form class="mt-4 grid max-w-[300px] gap-4" on:submit|preventDefault={tryLogin}>
  <Input placeholder="Nombre" invalid={inputErrors.name} disabled={loading} bind:value={name} />
  <Input placeholder="Usuario" invalid={inputErrors.user} disabled={loading} bind:value={user} />
  <Button primal type="submit">Inicia sesión</Button>
</form>
