## Description:
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

## Examples input/output:
- insideOut('man i need a taxi up to ubud') --> 'man i ende a atix up to budu'
- insideOut('what time are we climbing up the volcano') --> 'hwta item are we milcgnib up the lovcona'
- insideOut('take me to semynak') --> 'atek me to mesykan'
- insideOut('massage yes massage yes massage') --> 'samsega yes samsega yes samsega'
- insideOut('take bintang and a dance please') --> 'atek nibtgna and a adnec elpesa'