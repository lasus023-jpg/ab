# Markdown Syntax Reference

Panduan lengkap untuk menulis dokumen menggunakan **Markdown**.

---

## 1. Heading
Gunakan tanda `#` di depan teks:

```markdown
# Judul 1
## Judul 2
### Judul 3
```
# Judul 1
## Judul 2
### Judul 3

---

## 2. Penekanan Teks

```markdown
**Tebal**
*Miring*
***Tebal & miring***
~~Coret~~
```
**Tebal**  
*Miring*  
***Tebal & miring***  
~~Coret~~

---

## 3. Daftar (List)

**Bullet List:**
```markdown
- Item satu
- Item dua
  - Sub-item
```
- Item satu
- Item dua
  - Sub-item

**Numbered List:**
```markdown
1. Pertama
2. Kedua
3. Ketiga
```
1. Pertama
2. Kedua
3. Ketiga

---

## 4. Tautan dan Gambar

```markdown
[Google](https://google.com)
![Logo](https://via.placeholder.com/100)
```
[Google](https://google.com)  
![Logo](https://via.placeholder.com/100)

---

## 5. Kutipan dan Kode

```markdown
> Ini adalah kutipan.
```
> Ini adalah kutipan.

**Kode Inline:** `` `print("Halo")` `` → `print("Halo")`

**Kode Block:**
<pre>
```python
def halo():
    print("Halo Dunia!")
```
</pre>

```python
def halo():
    print("Halo Dunia!")
```

---

## 6. Tabel

```markdown
| Nama | Umur | Kota |
|------|------|------|
| Andi | 17   | Bandung |
| Budi | 18   | Surabaya |
```
| Nama | Umur | Kota |
|------|------|------|
| Andi | 17   | Bandung |
| Budi | 18   | Surabaya |

---

## 7. Checklist

```markdown
- [x] Sudah
- [ ] Belum
```
- [x] Sudah
- [ ] Belum

---

## 8. Garis Pemisah

```markdown
---
```
---

---

## 9. HTML di Markdown

```markdown
<p style="color:blue">Teks ini biru</p>
```
<p style="color:blue">Teks ini biru</p>

---

## 10. Contoh Lengkap

```markdown
# Catatan Harian

> “Markdown adalah kertas polos yang bisa jadi web.”

- [x] Belajar dasar Markdown
- [ ] Upload ke GitHub

```js
console.log("Halo Markdown!");
```

Kunjungi [GitHub Pages](https://pages.github.com).
```