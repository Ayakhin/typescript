interface Administrateur {
    nom: string;
    email: string;
    ip: string;
    dt_connexion: Date;
    login: string;
    password: string;
  }
  
  type UtilisateurAnonyme = Pick<Administrateur, 'nom'> & { ip: string };
  
  // Ou, si vous avez besoin du nom aussi
  const utilisateurAnonymeAvecNom: UtilisateurAnonyme = {
    nom: 'Rayan',
    ip: '192.168.0.58',
  };
  