import { signIn } from 'next-auth/client';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    });

    if (result.error) {
      res.status(401).json({ message: 'Credenciales inválidas' });
    } else {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};
