---
layout: page
title: Best Practices for Audio
permalink: /best-practices/audio/
category: best-practices
---

One decision you will need to make during your project development is the type of audio you would like in your final product.

{% include TOC %}

## Lossless vs Lossy
One concept of audio is the difference between a lossless and a lossy format.

**Lossless** stores data uncompressed, storing all of the frequencies in the audio. The file is significantly larger as a result. A popular choice is WAVeform (.wav).

**Lossy** compresses the audio, which deletes top and bottom frequencies depending on the bit rate. The file size is significantly smaller as a result. A well known format is MP3.

To maximize the audio quality of your project, you should consider keeping the original and converting a copy based on your needs. Regardless of how much you sacrifice file size over quality, by keeping the original, you can re-convert later if desired.

For some runtimes, Fusion may convert the file to a different format. As with the case with [HTML5](/exporters/html5/), as different web browsers support different sound files.

## Format Comparison

{:.table .table-striped .table-hover .table-sm}
File Extension | Format | Type | Supported by Fusion? | Free to Use?
-------------- | ------ | ---- | -------------------- | ---------- |
.wav | Waveform Audio File Format (WAVE) | Lossless | Yes | Yes - No license
.ogg | Ogg Vorbis | Lossy | Yes | Yes - Free software
.aif / .aiff | Audio Interchange File Format | Lossless | Yes | Yes - No license
.mod / .it / .s3m / .xm | Amiga Music Module File | Sequencer | Yes | Yes - No license
.mp3 | MPEG-2 Audio Layer III | Lossy | Yes | Yes - Licensing Ended
.mid / .rmi | MIDI Sequencer Files | Sequencer | Partial - Windows EXE only | Yes - No license
.wma | Windows Media Audio | Lossy | Partial - DirectShow only | No - Licensed

See the [Sound Object](/extensions/sound-object/) for compatibility across exporters.

A sequencer only stores musical notes, instruments or both. This type of format does not contain any streams and is played "on the fly".

## Choosing the Compression Ratio
If you opt for a lossy format, choosing the amount of compression is likely to vary depending on your music and sounds.

{:.table .table-hover .table-sm}
Bit Rate | Label
-------- | ------------
64 kbps  | Poor Quality
128 kbps | Good Quality
160 kbps | Better Quality
192 kbps | High Quality
256 kbps | Very High Quality
320 kbps | Excellent Quality

## Positional Audio
If you are using positional audio (for sound effects), you will also want to convert your sounds to mono to half the file size and prevent interference on panned channels.

## MP3 vs OGG Vorbis
#### File Size
The Ogg Vorbis format is superior is MP3 as it can store more frequencies (thus, higher bit rates) at a smaller file size to that of MP3.

Comparing a 30 second 440Hz sine wave:

{:.table .table-hover .table-sm}
Bit rate | MP3      | Ogg Vorbis    | Difference
-------- | -------- | ------------- | -----------
64 kbps  | 201.5 kB | 45.9 kB       | +22%
128 kbps | 319.6 kB | 48.8 kB       | +15%
192 kbps | 327.0 kB | 54.5 kB       | +16%
256 kbps | 347.4 kB | 58.5 kB       | +16%
320 kbps | 369.5 kB | 60.8 kB       | +15%

For reference, a 16-bit signed PCM WAV and AIFF file would be **2.6 MB**.

#### Portability
Ogg Vorbis is natively supported by Fusion, and is compatible across all runtimes whereas MP3 is available for selected exporters (such as [HTML5)](/exporters/HTML5/).
