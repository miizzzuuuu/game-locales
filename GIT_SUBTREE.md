# Add an alias

# Add

git config alias.sba 'subtree add --prefix public/locales /
ssh://git@gitdewa99.com:idnlive:8822/games-localize.git main --squash'

git config alias.sba 'subtree add --prefix public/locales locales-repo main --squash'

# Pull

git config alias.sbpl 'subtree pull --prefix public/locales /
ssh://git@gitdewa99.com:idnlive:8822/games-localize.git main --squash'

# Push

git config alias.sbph 'subtree push --prefix public/locales /
ssh://git@gitdewa99.com:idnlive:8822/games-localize.git main'

# Adding this subtree adds a st dir with a readme

git sba
vi st/README.md

# Edit file

git status shows differences
