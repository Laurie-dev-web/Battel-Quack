# TO DO LIST

[ X ] - Créer une maquette Figma
[ X ] - Repo Github
[ X ] - Composant player (name = "riri") -
[ X ] - Rajouter dans le composant player : (src)
[ X ] - Affichage des pv (20) / +1 / -1 / +5 / -5
[ X ] - Bouton Reset

[ 0 ] - PV 20 ne vas pas au dessus de 20.

[ 0 ] - PV <= 0 on disable
[ 0 ] - Ajouter fifi , loulou.
[ 0 ] - CSS card

# créer un composant Player

- props: name
- state: pv(20)
- ui
  - nom
  - pv (bonus: afficher pv actuels / pv max)
  - boutons: reset, +1,-1,+5,-5
- styles
  - le Player s'affiche sous forme de card (rectangle vertical)
  - responsive
- bonus
  - si pv<=0, on disable tous les boutons sauf "reset"

# mon App gère _des_ joueurs

- Appeler Player 3x
- state: players(["Riri", "Fifi", "Loulou"])
- ui
  - affiche les Players (recherche sur `.map`)
- bonus
  - form qui permet d'ajouter un joueur via un input

# Rendu & contraintes

- Repo GHub à créer de suite
- un readme.md mis à jour chaque demi journée avec les changements faits
- pas d'IA
- à faire solo
