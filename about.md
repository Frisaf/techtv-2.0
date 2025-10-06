---
title: Om oss
layout: post_layout.html
---
## Om sidan
Detta är ett skolarbete. Orginalsidan till denna var skapad tidigare under 2025, men då med endast HTML, CSS och Javascript. Denna sida är Tech TV 2.0, en uppgradering! Den innehåller fler artiklar och support för mer dynamiska funktioner rent utvecklarmässigt. Sammanfattningsvis är denna version av Tech TV mycket bättre och smidigare än den förra.

## Om oss på Tech TV
Tech TV:s uppdrag är att leverera oberoende, neutrala och faktabaserade tekniknyheter från hela Sverige. Våra nyhetsbyråer och reportrar jobbar dygnet runt, över hela Sverige, för att rapportera om teknikens under, från Malmö i söder till Kiruna i norr. Vårt mål är att uppnå en värld där tekniknyheter är lättåtkomliga, och oberoende.

Vi jobbar dygnet runt med att leverera så oberoende och neutrala nyheter som möjligt och tar till oss all konstruktiv kritik som vår kommunikationsavdelning tar emot. Vår granskningsavdelning granskar de artiklar som publiceras och jobbar aktivt med våra reportrar för att se till att vinklingen är rak.

Vi finansieras tack vare dig som väljer våra tjänster och köper våra veckotidningar, men vill du ta del av premiumfunktioner samt läsa premiumartiklar kan du redan idag köpa premiumpaketet som går att skräddarsy efter just dina behov. Premiumpaketets pris justeras efter dina val.

### Vill du vara med och stötta Tech TV i vårt uppdrag?

<div class="subscribeButton">
    <span>Prenumerera idag!</span>
</div>

## Produkter och Tjänster
Vi erbjuder kanalen Tech TV som finns att nå på kanal 123 i din TV-apparat, en webbplats, en app i mobilen och en barnvänlig person som erbjuder allmänbildande nyheter i ett mer barnvänligt format. Vi erbjuder dessutom en veckotidning för de som föredrar att läsa sina nyheter analogt.

<img src="/images/newspaper.jpg">

## Det som gör oss unika
Det som gör oss på Tech TV unika är att vi är centrerade på svensk teknik och de tekniska framsteg som görs i Sverige. Många tekniktidningar riktar sig på internationella framsteg, vilket gör att många saker som händer i Sverige blir överskuggade av det som händer i exempelvis Silicon Valley. Vi vill främja Sverige i teknikens värld och få upp folks ögon för Tekniksverige.

## Vårt ansikte utåt

<div class="staff">
    {% for person in employees.people %}
        <div class="staffInfo">
            <img src="{{ person.image }}" alt="{{ person.alt }}">
            <p><strong>{{ person.name }}</strong></p>
            <p>{{ person.role }}</p>
        </div>
    {% endfor %}
</div>

## Hitta hit

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17049.676106469105!2d12.92293945192015!3d57.71289879683747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465aa0b04bdcfeed%3A0x7c327e8fc1abfa59!2zQm9yw6Vz!5e0!3m2!1sen!2sse!4v1739884233130!5m2!1sen!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

## Ta kontakt med oss!
För att kontakta Tech TV kan du antingen skicka ett mail till TechTV@mail.se, ringa oss på 070 420 69 67, eller skicka brev till:

<span>Tech TV</span><br>
<span>Hittepågatan 69B</span><br>
<span>420 69 Borås</span>

*Notera att vi endast svarar via brevduva*

Eller så fyller du i formuläret här nedanför.

*\* - obligatorisk fråga*

<form action="/thankyou" autocomplete="off">
    <label for="subject"><strong>Ämne*</strong></label><br>
    <input type="text" id="subject" name="subject" required><br>
    <label for="content"><strong>Innehåll*</strong></label><br>
    <textarea id="content" name="content" rows="7" cols="40" required></textarea><br>
    <label for="mail"><strong>Epostadress </strong></label><br>
    <span><em>Detta är frivilligt, men vill du att vi ska kunna kontakta dig efteråt bör du fylla i detta</em></span><br>
    <input type="text" id="mail" name="mail"><br>
    <button type="submit" class="subscribeButton">Skicka</button>
</form>