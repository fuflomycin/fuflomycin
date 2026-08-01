---
name: fuflomycin-validate-build
description: Пересобирает и проверяет data-пайплайн fuflomycin после изменений Markdown, изображений или конвертеров. Использовать перед коммитом и при диагностике расхождения src и docs.
---

# Проверка сборки

## Сборка

Запусти соответствующую команду:

```bash
npm run homeopathy
npm run rsp
npm run fk
npm run all
```

## Чеклист

- [ ] Команда завершилась без ошибок.
- [ ] Каждый изменённый Markdown имеет непустой `title`.
- [ ] Новая запись появилась в соответствующем `docs/*.json` с ожидаемым `id`.
- [ ] Все `photo` и `gallery` существуют в `docs/img/`.
- [ ] Diff `docs/` отражает только ожидаемые изменения данных и копируемых изображений.
- [ ] При переименовании slug проверена совместимость нового `id` с потребителями.

## Быстрая проверка изображений

```bash
node -e "const fs=require('fs');for(const c of ['homeopathy','rsp','fk'])for(const e of JSON.parse(fs.readFileSync('docs/'+c+'.json')))[e.photo,...(e.gallery||[])].filter(Boolean).forEach(i=>{if(!fs.existsSync('docs/img/'+i))console.error('MISSING IMG',c,e.id,i)})"
```

`docs/*.json` — generated-артефакты. Исправляй источник в `src/` и повторяй сборку, а не правь JSON вручную.
