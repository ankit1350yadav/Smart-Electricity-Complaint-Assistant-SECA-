insert into public.users(id,full_name,phone,role,address) values
('00000000-0000-0000-0000-000000000101','Asha Sharma','919810000101','consumer','Lajpat Nagar, New Delhi'),
('00000000-0000-0000-0000-000000000102','Ravi Kumar','919810000102','consumer','T Nagar, Chennai'),
('00000000-0000-0000-0000-000000000201','Priya Nair','919810000201','admin','DISCOM Control Room'),
('00000000-0000-0000-0000-000000000301','Engineer Imran Khan','919810000301','engineer','South Zone') on conflict do nothing;
insert into public.engineers(id,user_id,name,phone,department,service_area,rating) values
('10000000-0000-0000-0000-000000000301','00000000-0000-0000-0000-000000000301','Imran Khan','919810000301','Operations','South Delhi',4.8) on conflict do nothing;
insert into public.complaints(id,user_id,assigned_engineer_id,title,description,category,priority,severity,status,department,address,lat,lng,ai_summary,engineer_brief,confidence,created_at) values
('20000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000101','10000000-0000-0000-0000-000000000301','Transformer sparking near market','There is sparking and smoke near the transformer beside Central Market. Children are nearby.','Transformer Damage','critical',9,'assigned','Operations','Central Market, Lajpat Nagar, New Delhi',28.5672,77.2433,'Critical transformer sparking hazard near public market.','Inspect transformer immediately, isolate feeder if required, cordon area, and coordinate emergency repair crew.',0.94,now()-interval '20 minutes'),
('20000000-0000-0000-0000-000000000002','00000000-0000-0000-0000-000000000102',null,'Low voltage at night','Fans and lights slow down every night after 8 PM in our lane.','Low Voltage','medium',5,'acknowledged','Distribution Quality','T Nagar, Chennai',13.0418,80.2341,'Recurring evening low voltage issue affecting residential lane.','Check load balance, transformer loading, and feeder voltage logs after 20:00.',0.88,now()-interval '2 hours'),
('20000000-0000-0000-0000-000000000003','00000000-0000-0000-0000-000000000101',null,'Street light not working','Three street lights are not working near the bus stop.','Street Light Failure','low',3,'submitted','Street Lighting','Bus Stop, Lajpat Nagar, New Delhi',28.5701,77.2451,'Street light outage near bus stop.','Verify pole numbers and replace faulty luminaire or cable joint.',0.83,now()-interval '1 day') on conflict do nothing;
insert into public.status_logs(complaint_id,status,note,changed_by) values
('20000000-0000-0000-0000-000000000001','submitted','Complaint created through SECA AI intake.','00000000-0000-0000-0000-000000000101'),
('20000000-0000-0000-0000-000000000001','assigned','Assigned to emergency operations engineer.','00000000-0000-0000-0000-000000000201'),
('20000000-0000-0000-0000-000000000002','acknowledged','Voltage quality check scheduled.','00000000-0000-0000-0000-000000000201');
insert into public.analytics(metric_date,metric_name,metric_value,dimensions) values
(current_date,'daily_complaints',57,'{"city":"Delhi"}'),
(current_date,'critical_complaints',23,'{"city":"Delhi"}'),
(current_date-1,'daily_complaints',49,'{"city":"Delhi"}'),
(current_date-2,'daily_complaints',61,'{"city":"Delhi"}') on conflict do nothing;
