const de = {
  message: {
    new_connection: 'Neue Verbindung',
    refresh_connection: 'Aktualisieren',
    edit_connection: 'Verbindung bearbeiten',
    duplicate_connection: 'Verbindung kopieren',
    del_connection: 'Verbindung löschen',
    close_connection: 'Verbindung schließen',
    add_new_line: 'Neue Zeile hinzufügen',
    dump_to_clipboard: "Als Befehl kopieren",
    redis_version: 'Redis Version',
    process_id: 'Prozess ID',
    used_memory: 'Benutzter Speicher',
    used_memory_peak: 'Benutzte Speicher-Spitze',
    used_memory_lua: 'Benutzte Speicher-Lua',
    connected_clients: 'Verbundene Clients',
    total_connections_received: 'Totale Verbindungen',
    total_commands_processed: 'Totale Kommandos',
    key_statistics: 'Wichtige Statistiken',
    all_redis_info: 'Alle Redis Infos',
    server: 'Server',
    memory: 'Speicher',
    stats: 'Statistik',
    settings: 'Einstellungen',
    ui_settings: 'Aussehen',
    feature_settings: 'Funktion',
    common_settings: 'Allgemein',
    confirm_to_delete_row_data: 'Soll die Zeile wirklich gelöscht werden?',
    delete_success: 'Löschen erfolgreich',
    delete_failed: 'Löschen fehlgeschlagen',
    modify_success: 'Ändern erfolgreich',
    modify_failed: 'Löschen fehlgeschlagen',
    add_success: 'Hinzufügen erfolgreich',
    add_failed: 'Hinzufügen fehlgeschlagen',
    value_exists: 'Wert existiert',
    value_not_exists: 'Der Wert existiert nicht',
    refresh_success: 'Aktualisierung erfolgreich',
    click_enter_to_rename: 'Klicken oder Enter drücken zum Umbenennen',
    click_enter_to_ttl: 'Klicken oder Enter drücken zum Modifizieren TTL',
    confirm_to_delete_key: 'Bestätigen zum löschen {key} ?',
    confirm_to_rename_key: 'Bestätigen zum umbenennen {old} -> {new} ?',
    edit_line: 'Zeile bearbeiten',
    auto_refresh: 'Auto Aktualisierung',
    auto_refresh_tip: 'Auto Aktualisierung Schalter, Aktualisiere alle {interval} Sekunden',
    key_not_exists: 'Schlüssel existiert nicht',
    collapse_all: 'Alle einklappen',
    expand_all: 'Alle ausklappen',
    json_format_failed: 'Json parsen fehlgeschlagen',
    msgpack_format_failed: 'Msgpack parsen fehlgeschlagen',
    php_unserialize_format_failed: 'PHP Unserialisieren fehlgeschlagen',
    clean_up: 'Bereinigen',
    redis_console: 'Redis Konsole',
    confirm_to_delete_connection: 'Soll die Verbindung gelöscht werden?',
    connection_exists: 'Verbindungs Konfiguration existiert bereits',
    close_to_edit_connection: 'Verbindung muss vor bearbeitung geschlossen werden',
    close_to_connection: 'Soll die Verbindung geschlossen werden?',
    ttl_delete: 'TTL<=0 setzen - löscht den Schlüssel direkt',
    max_page_reached: 'Maximale Seiten anzahl',
    add_new_key: 'Neuer Schlüssel',
    enter_new_key: 'Ersten Schlüssel-Namen eingeben',
    key_type: 'Schlüssel typ',
    save: 'Speichern',
    enter_to_search: 'Eingabe zur Suche',
    export_success: 'Exportieren erfolgreich',
    select_import_file: 'Datei auswählen',
    import_success: 'Importierung erfolgreich',
    put_file_here: 'Ziehen sie die Datei hierher oder Klicken zur Selektierung',
    config_connections: 'Verbindungen',
    import: 'Importieren',
    export: 'Exportieren',
    open: 'Öffnen',
    close: 'Schließen',
    open_new_tab: 'Im neuen Fenster öffnen',
    exact_search: 'Exakte Suche',
    enter_to_exec: 'Enter drücken um Kommando auszuführen, Hoch - Runter zum wechseln der Historie',
    pre_version: 'Version',
    manual_update: 'Handbuch-Download',
    retry_too_many_times: 'Zu viele Versuche, die Verbindung wieder herzustellen. Bitte überprüfen Sie den Server-Status',
    key_to_search: 'Schlüsselwort-Suche',
    begin_update: 'Aktualisierung',
    ignore_this_version: 'Ignoriere diese Version',
    check_update: 'Aktualisierung prüfen',
    update_checking: 'Nach Updates suchen ...',
    update_available: 'Neue Version gefunden',
    update_not_available: 'Ihre App ist auf dem neuesten Stand',
    update_error: 'Aktualisierung fehlgeschlagen',
    update_downloading: 'Herunterladen ...',
    update_download_progress: 'Download Fortschritt',
    update_downloaded: 'Update Download abgeschlossen, bitte starten Sie Ihre App neu.\
    [Tips]: Wenn Sie Windows verwenden, warten Sie nach dem Schließen der App darauf, dass das Desktopsymbol auf einen normalen Zustand (ca. 10 Sekunden) aktualisiert wird, und öffnen Sie es dann erneut',
    mac_not_support_auto_update: 'Mac unterstützt keine automatische Aktualisierung, bitte manuell <a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">herunterladen</a> und neu installieren,\
    or ausführen <br><code>brew reinstall --cask another-redis-desktop-manager </code>\
    <br><hr><br>❤️Wenn es für Sie nützlich ist, können Sie über den <a href="https://apps.apple.com/app/id1516451072">AppStore</a> sponsern, und der AppStore aktualisiert es automatisch für Sie.',
    font_family: 'Schrift familie',
    font_faq_title: 'Anweisungen zum Einstellen der Schriftart',
    font_faq: '1. Mehrere Schriftarten können eingestellt werden<br>\
    2. Die Auswahl der Schriftart ist geordnet. Es wird empfohlen, zuerst die englische Schriftart und dann die Schriftart in Ihrer Sprache zu wählen.<br>\
    3. Wenn die Systemschriftenliste in einigen Ausnahmefällen nicht geladen werden kann, können Sie den Namen der installierten Schrift manuell eingeben.',
    private_key_faq: 'RSA format private key is supported, which starts with <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    beginnt mit <pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre>Sie müssen das Format konvertieren mittels <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre>Dieser Vorgang hat keine Auswirkungen auf die vorherige Anmeldung mit privatem Schlüssel',
    dark_mode: 'Dunkel modus',
    load_more_keys: 'mehr laden',
    key_name: 'Schlüssel-Name',
    project_home: 'Projekt Home',
    cluster_faq: 'Wählen Sie einen beliebigen Knoten im Cluster zum Ausfüllen aus, und andere Knoten werden automatisch identifiziert.',
    redis_status: 'Redis Info',
    confirm_flush_db: 'Bestätigen Sie, um alle Schlüssel in db ({db}) zu löschen ?',
    flushdb: 'Speichere Datenbank',
    flushdb_prompt: 'Eingabe "{txt}"',
    info_disabled: 'Info-Befehlsausführungsausnahme (kann deaktiviert worden sein), Redis-Info kann nicht angezeigt werden',
    page_zoom: 'Seite vergrößern',
    scan_disabled: 'Ausnahme bei der Ausführung von Scan-Befehlen (kann deaktiviert worden sein), Schlüsselliste kann nicht angezeigt werden',
    key_type_not_support: 'Die visuelle Anzeige wird für diesen Typ wird nicht unterstützt. Bitte benutzen Sie die Konsole.',
    delete_folder: 'Scannen und Löschen des gesamten Ordners',
    multiple_select: 'Mehrere Auswahl',
    copy: 'Kopieren',
    copy_success: 'Erfolgreich kopieren',
    keys_to_be_deleted: 'Zu löschende Schlüssel',
    delete_all: 'Alle löschen',
    clear_cache: 'Cache leeren',
    mark_color: 'Farbe markieren',
    key_no_permission: 'Die Berechtigung zum Lesen von Dateien ist abgelaufen. Wählen Sie die Schlüsseldatei erneut manuell aus',
    toggle_check_all: 'Alle auswählen | Alle abwählen',
    select_lang: 'Sprache auswählen',
    clear_cache_tip: 'Wenn es ein Problem mit dem Client gibt, wird diese Operation alle Verbindungen und Konfigurationen löschen, um den Client wiederherzustellen',
    detail: 'Detail',
    separator_tip: 'Das Trennzeichen der Baumansicht wird auf leer gesetzt, um den Baum zu deaktivieren und Schlüssel als Liste anzuzeigen',
    confirm_modify_unvisible_content: 'Der Inhalt enthält unsichtbare Zeichen, die Sie sicher in der "Hex View" bearbeiten können. Wenn die weitere Bearbeitung im "Text View" zu Codierungsfehlern führen kann, fahren Sie sicher fort?',
    keys_per_loading: 'Anzahl der Schlüssel',
    keys_per_loading_tip: 'Die Anzahl der Schlüssel, die jedes Mal geladen werden. Eine zu große Einstellung kann die Leistung beeinträchtigen',
    host: 'Adresse',
    port: 'Hafen',
    username: 'Nutzername',
    password: 'Passwort',
    connection_name: 'Benutzerdefinierter Name',
    separator: 'Separator',
    timeout: 'Auszeit',
    private_key: 'Privat Schlüssel',
    public_key: 'Öffentlicher Schlüssel',
    authority: 'Genehmigung',
    redis_node_password: 'Passwort des Redis-Knotens',
    master_group_name: 'Name der Gruppe Master',
    command_log: 'Log',
    sentinel_faq: 'Sie können einen von mehreren Sentinels auswählen. Bitte geben Sie die Sentinel-Konfiguration für Adresse, Port und Passwort ein. Das Redis-Knoten-Passwort ist das Passwort des vom Sentinel überwachten Master-Knotens.',
    hotkey: 'Hotkey',
    persist: 'Ablaufzeit entfernen',
    custom_formatter: 'Benutzerdefinierter Formatierer',
    edit: 'Bearbeiten',
    new: 'Hinzufügen',
    custom: 'Anpassen',
    hide_window: 'Fenster ausblenden',
    minimize_window: 'Fenster minimieren',
    maximize_window: 'Fenster maximieren',
    load_all_keys: 'alle laden',
    show_load_all_keys: 'Schaltfläche aktivieren, um alle Schlüssel zu laden',
    load_all_keys_tip: 'Alle Schlüssel auf einmal laden. Wenn die Anzahl der Schlüssel zu groß ist, kann der Client stecken bleiben. Bitte verwenden Sie es richtig',
    tree_node_overflow: 'Zu viele Schlüssel oder Ordner, behalten Sie nur {num} für die Anzeige. Wenn Ihr Schlüssel nicht hier ist, wird eine unscharfe Suche empfohlen, oder den Trenner setzen, um die Schlüssel in Ordner zu verteilen',
    connection_readonly: 'Readonly-Modus. Das Hinzufügen, Bearbeiten und Löschen ist untersagt',
    memory_analysis: 'Gedächtnisanalyse',
    begin: 'Start',
    pause: 'Pause',
    restart: 'Neu starten',
    max_display: 'Maximale Anzahl von Displays: {num}',
    max_scan: 'Maximale Anzahl an Scans: {num}',
    close_left: 'Schließen Sie die linken Registerkarten',
    close_right: 'Schließen Sie die rechten Registerkarten',
    close_other: 'Schließen Sie andere Registerkarten',
    slow_log: 'Langsame Abfrage',
  },
};

export default de;
