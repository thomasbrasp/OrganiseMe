# WEBUNTIS
- **URL:**
    - https://arche.webuntis.com/timetable-classes/44010/2025-02-10
    - https://arche.webuntis.com/timetable-classes/44010/2025-02-17

- **Request URL:**
    - https://arche.webuntis.com/WebUntis/api/public/timetable/weekly/data?elementType=1&elementId=44010&date=2025-02-10&formatId=3
    - https://arche.webuntis.com/WebUntis/api/public/timetable/weekly/data?elementType=1&elementId=44010&date=2025-02-17&formatId=3

- **Request Method:** GET
- **Authority:** arche.webuntis.com

**Notities:**
- Dit is de belangrijkste bron voor lessenroosters.
- Wij kunnen klassencodes (bijv. 44010 voor 1PRO_D4) aan klasgroepen linken.
- Momenteel kunnen studenten manueel lessenroosters opvragen, maar automatisering is niet mogelijk door ontbrekende authenticatie.
- Om dataverbruik te beperken, sturen we enkel requests voor actieve gebruikers en het actieve semester. Requests worden 1x per dag 's nachts gedaan om het netwerk niet te belasten en leerlingen een up-to-date agenda te geven.
- Tot het project klaar is, beperken we ons tot klasgroepen van onze richting om hinder op het schoolnetwerk te voorkomen.

---

# KALENDER (digitap.be)
- **URL:** https://learning.ap.be/my/
- **Request URL:** https://learning.ap.be/lib/ajax/service.php?sesskey=X8CGhSExg8&info=core_calendar_get_action_events_by_timesort
- **Request Method:** POST

**Notities:**
- Hier zien studenten deadlines.
- Automatisering vereist een manier om een gebruiker op de applicatie te linken aan de authenticatie van het schoolplatform. Dit is een complex probleem.
- Een mogelijke oplossing is het manueel opvragen van gegevens via een ICS-bestand.

---

# KALENDER (student.ap.be)
- **URL:** https://student.ap.be/events
- **Request URL (API request):**
    - https://student.ap.be/events/fetch/untis/2025/02
    - https://student.ap.be/events/fetch/untis/2025/03
    - ...
- **Request Method:** POST
- **Authority:** student.ap.be

**Notities:**
- Dit zijn voorbeeldrequests. Als WebUntis niet kan helpen, is dit de laatste mogelijkheid.
- Deze oplossing vereist communicatie tussen het schoolplatform en onze applicatie.  