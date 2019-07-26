SELECT
    (SELECT COUNT(*) FROM tb_contacts) AS nrcontacts,
    (SELECT COUNT(*) FROM tb_menus) AS nrmenus,
    (SELECT COUNT(*) FROM tb_reservations) AS nrreservations,
    (SELECT COUNT(*) FROM tb_users) AS nrusers;