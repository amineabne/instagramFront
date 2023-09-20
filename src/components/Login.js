import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMotDePasseChange = (e) => {
    setMotDePasse(e.target.value);
  };

  const handleLogin = () => {
    const authenticationEndpoint = 'http://localhost:8080/api/utilisateurs/connexion';

    fetch(authenticationEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, motDePasse }), // Correction: utilisez "motDePasse" pour le champ de mot de passe
    })
      .then((response) => {
        if (response.ok) {
          return response.text().then((data) => {
            console.log(data); // Ceci est la réponse textuelle, pas un objet JSON
            if (data === "Inscription réussie" || data === "Connexion réussie") {
              // Gérez ici la réussite de l'inscription ou de la connexion
              // Par exemple, redirigez l'utilisateur vers une autre page
              if (data === "Connexion réussie") {
                window.location.href = '/home';
              }
            } else {
              // Gérez ici d'autres cas de réussite si nécessaire
            }
          });
        } else {
          // Gestion des erreurs ici
          throw new Error('Authentication failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
        // Gestion des erreurs ici
        setErrorMessage('Mot de passe ou email incorrect');
      });
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Entrez votre email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="motDePasse">Mot de passe :</label>
          <input
            type="password" // Correction : utilisez "password" pour le type
            id="motDePasse"
            value={motDePasse}
            onChange={handleMotDePasseChange} // Correction : utilisez "handleMotDePasseChange" pour la fonction
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button type="button" onClick={handleLogin} className="login-button">
          Se connecter
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
}

export default Login;
