#!/usr/bin/env bash
set -euo pipefail

OUTPUT="repo_status.md"
TMP_OUTPUT="$(mktemp)"

EXCLUDE_DIRS=(".git" "_site" "node_modules" ".jekyll-cache" ".bundle" "vendor")
EXCLUDE_FILES=(".DS_Store" "Thumbs.db" "repo_status.md" "repo_status.sh")

PRUNE_EXPR=()
for dir in "${EXCLUDE_DIRS[@]}"; do
  PRUNE_EXPR+=(-path "./$dir" -o)
done
unset 'PRUNE_EXPR[${#PRUNE_EXPR[@]}-1]'

FILE_EXCLUDE_EXPR=()
for f in "${EXCLUDE_FILES[@]}"; do
  FILE_EXCLUDE_EXPR+=(-name "$f" -o)
done
unset 'FILE_EXCLUDE_EXPR[${#FILE_EXCLUDE_EXPR[@]}-1]'

echo "# Repo status" > "$TMP_OUTPUT"
echo "" >> "$TMP_OUTPUT"
echo "Generated: $(date)" >> "$TMP_OUTPUT"
echo "" >> "$TMP_OUTPUT"

echo "## Tree" >> "$TMP_OUTPUT"
echo '```' >> "$TMP_OUTPUT"
if command -v tree >/dev/null 2>&1; then
  ALL_IGNORE=$(IFS='|'; echo "${EXCLUDE_DIRS[*]}|${EXCLUDE_FILES[*]}")
  tree -a -I "$ALL_IGNORE" >> "$TMP_OUTPUT"
else
  find . \( "${PRUNE_EXPR[@]}" \) -prune -o \( "${FILE_EXCLUDE_EXPR[@]}" \) -prune -o -print \
    | sed 's|^\./||' | sort >> "$TMP_OUTPUT"
fi
echo '```' >> "$TMP_OUTPUT"
echo "" >> "$TMP_OUTPUT"

echo "## Files" >> "$TMP_OUTPUT"
echo "" >> "$TMP_OUTPUT"

lang_for_ext() {
  case "$1" in
    md) echo "markdown" ;;
    yml|yaml) echo "yaml" ;;
    html) echo "html" ;;
    scss|css) echo "css" ;;
    js) echo "javascript" ;;
    rb) echo "ruby" ;;
    json) echo "json" ;;
    *) echo "" ;;
  esac
}

find . \( "${PRUNE_EXPR[@]}" \) -prune -o \( "${FILE_EXCLUDE_EXPR[@]}" \) -prune -o -type f -print \
  | sed 's|^\./||' | sort | while IFS= read -r file; do
  if file "$file" | grep -qE 'binary|data'; then
    echo "### \`$file\`" >> "$TMP_OUTPUT"
    echo "" >> "$TMP_OUTPUT"
    echo "_Skipped: binary file_" >> "$TMP_OUTPUT"
    echo "" >> "$TMP_OUTPUT"
    continue
  fi

  ext="${file##*.}"
  lang=$(lang_for_ext "$ext")

  echo "### \`$file\`" >> "$TMP_OUTPUT"
  echo "" >> "$TMP_OUTPUT"
  echo "\`\`\`${lang}" >> "$TMP_OUTPUT"
  cat "$file" >> "$TMP_OUTPUT"
  echo "" >> "$TMP_OUTPUT"
  echo '```' >> "$TMP_OUTPUT"
  echo "" >> "$TMP_OUTPUT"
done

mv "$TMP_OUTPUT" "$OUTPUT"
echo "Done. Wrote $OUTPUT"