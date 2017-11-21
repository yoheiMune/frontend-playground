# Sample for Multipart/Form-data


## Experiment vol.1
text and textfile.
### Front-end
Put data from front-end.
```
<form method="POST" action="/upload" enctype="multipart/form-data">
    <input type="text" name="message" value="Hello"/><br>
    <input type="file" name="file"/><br>
    <input type="submit" value="SUBMIT"/>
</form>
```
`input[type="file"]` is selected [a.txt](./a.txt).

### Back-end
Server received below.
#### Request Header（content-type）
```
'content-type': multipart/form-data; boundary=----WebKitFormBoundaryO5quBRiT4G7Vm3R7
```
#### Post Body
```
------WebKitFormBoundaryO5quBRiT4G7Vm3R7
Content-Disposition: form-data; name="message"

Hello
------WebKitFormBoundaryO5quBRiT4G7Vm3R7
Content-Disposition: form-data; name="file"; filename="a.txt"
Content-Type: text/plain

aaa
------WebKitFormBoundaryO5quBRiT4G7Vm3R7--
```

## Experiment vol.2
text and image file.
### Front-end
Same as Experiment vol.1.
### Back-end
#### Request Header（content-type）
```
'content-type': multipart/form-data; boundary=----WebKitFormBoundaryO5quBRiT4G7Vm3R7
```
#### Post Body
Cannot read for human.
```
���ބß܂{���r��pc�wS����#`p!��o�o
                               rho@���~W݀����������?��c�ZJ����t�$���97��yu|`�&F/y�����!��N�y7>?y��k�/��?d91�o� �>Q>�_ݗ�?M���?��GvW3�e����Wbpgy����`�))�@Q,qh�,�eGC+[B
Q��;�5�Q��N�4_�t    �`s��}��'FL�KIU�vA�/,D�<����L�M7>�(�
����nq�zꎼ�<v|Xxj$1��a�T������N��U�%��"�|4�@,Ų��&]�-�����5˝
���H�Xa;+2��
�qi^�?���
------WebKitFormBoundaryLxaCbFam5J6BIisS--
```

## References.
* For understanding how to treat `multipart/form-data`, see below implementations. This library is used in [multer.js](https://github.com/expressjs/multer) for [express](https://github.com/expressjs/express).
  * [https://github.com/mscdex/busboy/blob/master/lib/types/multipart.js](https://github.com/mscdex/busboy/blob/master/lib/types/multipart.js)






