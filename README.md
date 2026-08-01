# fuflomycin

Русскоязычная справочная база препаратов с недоказанной эффективностью, гомеопатии и негативного перечня Формулярного комитета. Это не источник персональных медицинских рекомендаций: вопросы диагностики и лечения следует обсуждать с врачом.

## Данные

GitHub Pages публикует JSON-эндпоинты:

- [Гомеопатия](https://fuflomycin.github.io/fuflomycin/homeopathy.json)
- [РСП / Фуфломицин](https://fuflomycin.github.io/fuflomycin/rsp.json)
- [Негативный перечень ФК](https://fuflomycin.github.io/fuflomycin/fk.json)

Исходные карточки находятся в `src/homeopathy/`, `src/rsp/` и `src/fk/`. Каждая карточка — Markdown с YAML frontmatter; имя файла формирует стабильный JSON `id` в camelCase. Сгенерированные данные находятся в `docs/`; вручную их не редактируют.

## Разработка

Требуется Node.js 18 или новее.

```bash
npm ci
npm run all
npm run validate
```

Отдельные категории собираются командами `npm run homeopathy`, `npm run rsp` и `npm run fk`. Перед pull request пересоберите затронутые JSON-файлы и включите изменения `src/`, изображений и `docs/` в один коммит.

## Источники

- [Государственный реестр лекарственных средств Республики Беларусь](https://www.rceth.by/Refbank/reestr_lekarstvennih_sredstv/)
- [Реестр лекарственных средств России](https://www.rlsnet.ru/fg_index_id_296.htm)
- [Расстрельный список препаратов](https://encyclopatia.ru/wiki/%D0%A0%D0%B0%D1%81%D1%81%D1%82%D1%80%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BF%D1%80%D0%B5%D0%BF%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2)
- [Негативный перечень медицинских технологий Формулярного комитета](http://www.rspor.ru/mods/db1/1/Negativ_perechen.pdf)
