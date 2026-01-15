// Comprehensive list of districts and major cities across India
export const INDIAN_CITIES = [
    // --- ANDAMAN AND NICOBAR ISLANDS ---
    { name: 'Port Blair', lat: 11.6234, lon: 92.7265, state: 'Andaman & Nicobar' },
    { name: 'Car Nicobar', lat: 9.1764, lon: 92.7663, state: 'Andaman & Nicobar' },
    { name: 'Mayabunder', lat: 12.9248, lon: 92.9360, state: 'Andaman & Nicobar' },

    // --- ANDHRA PRADESH ---
    { name: 'Anantapur', lat: 14.6819, lon: 77.6006, state: 'Andhra Pradesh' },
    { name: 'Chittoor', lat: 13.2172, lon: 79.1003, state: 'Andhra Pradesh' },
    { name: 'East Godavari (Kakinada)', lat: 16.9891, lon: 82.2475, state: 'Andhra Pradesh' },
    { name: 'Guntur', lat: 16.3067, lon: 80.4365, state: 'Andhra Pradesh' },
    { name: 'Kadapa', lat: 14.4673, lon: 78.8242, state: 'Andhra Pradesh' },
    { name: 'Krishna (Machilipatnam)', lat: 16.1804, lon: 81.1388, state: 'Andhra Pradesh' },
    { name: 'Kurnool', lat: 15.8281, lon: 78.0373, state: 'Andhra Pradesh' },
    { name: 'Nellore', lat: 14.4426, lon: 79.9865, state: 'Andhra Pradesh' },
    { name: 'Prakasam (Ongole)', lat: 15.5057, lon: 80.0499, state: 'Andhra Pradesh' },
    { name: 'Srikakulam', lat: 18.3000, lon: 83.9000, state: 'Andhra Pradesh' },
    { name: 'Visakhapatnam', lat: 17.6869, lon: 83.2185, state: 'Andhra Pradesh' },
    { name: 'Vizianagaram', lat: 18.1067, lon: 83.3956, state: 'Andhra Pradesh' },
    { name: 'West Godavari (Eluru)', lat: 16.7111, lon: 81.0967, state: 'Andhra Pradesh' },
    { name: 'Vijayawada', lat: 16.5062, lon: 80.6480, state: 'Andhra Pradesh' },
    { name: 'Tirupati', lat: 13.6288, lon: 79.4192, state: 'Andhra Pradesh' },
    { name: 'Rajahmundry', lat: 16.9891, lon: 81.7837, state: 'Andhra Pradesh' },

    // --- ARUNACHAL PRADESH ---
    { name: 'Itanagar', lat: 27.0844, lon: 93.6053, state: 'Arunachal Pradesh' },
    { name: 'Tawang', lat: 27.5843, lon: 91.8653, state: 'Arunachal Pradesh' },
    { name: 'Pasighat', lat: 28.0665, lon: 95.3268, state: 'Arunachal Pradesh' },
    { name: 'Ziro', lat: 27.6300, lon: 93.8300, state: 'Arunachal Pradesh' },
    { name: 'Bomdila', lat: 27.2500, lon: 92.4000, state: 'Arunachal Pradesh' },

    // --- ASSAM ---
    { name: 'Guwahati', lat: 26.1445, lon: 91.7362, state: 'Assam' },
    { name: 'Dibrugarh', lat: 27.4728, lon: 94.9120, state: 'Assam' },
    { name: 'Silchar', lat: 24.8333, lon: 92.7789, state: 'Assam' },
    { name: 'Jorhat', lat: 26.7579, lon: 94.2163, state: 'Assam' },
    { name: 'Nagaon', lat: 26.3477, lon: 92.6775, state: 'Assam' },
    { name: 'Tinsukia', lat: 27.4886, lon: 95.3558, state: 'Assam' },
    { name: 'Tezpur', lat: 26.6500, lon: 92.7833, state: 'Assam' },

    // --- BIHAR ---
    { name: 'Patna', lat: 25.5941, lon: 85.1376, state: 'Bihar' },
    { name: 'Gaya', lat: 24.7955, lon: 84.9994, state: 'Bihar' },
    { name: 'Bhagalpur', lat: 25.2425, lon: 86.9842, state: 'Bihar' },
    { name: 'Muzaffarpur', lat: 26.1209, lon: 85.3647, state: 'Bihar' },
    { name: 'Purnia', lat: 25.7771, lon: 87.4753, state: 'Bihar' },
    { name: 'Darbhanga', lat: 26.1119, lon: 85.8960, state: 'Bihar' },
    { name: 'Ara', lat: 25.5560, lon: 84.6603, state: 'Bihar' },
    { name: 'Begusarai', lat: 25.4182, lon: 86.1272, state: 'Bihar' },
    { name: 'Katihar', lat: 25.5393, lon: 87.5646, state: 'Bihar' },

    // --- CHANDIGARH ---
    { name: 'Chandigarh', lat: 30.7333, lon: 76.7794, state: 'Chandigarh' },

    // --- CHHATTISGARH ---
    { name: 'Raipur', lat: 21.2514, lon: 81.6296, state: 'Chhattisgarh' },
    { name: 'Bhilai', lat: 21.2094, lon: 81.4294, state: 'Chhattisgarh' },
    { name: 'Bilaspur', lat: 22.0797, lon: 82.1409, state: 'Chhattisgarh' },
    { name: 'Korba', lat: 22.3503, lon: 82.6798, state: 'Chhattisgarh' },
    { name: 'Durg', lat: 21.1904, lon: 81.2849, state: 'Chhattisgarh' },
    { name: 'Rajnandgaon', lat: 21.0971, lon: 81.0267, state: 'Chhattisgarh' },
    { name: 'Raigarh', lat: 21.8974, lon: 83.3950, state: 'Chhattisgarh' },
    { name: 'Jagdalpur', lat: 19.0743, lon: 82.0016, state: 'Chhattisgarh' },

    // --- DADRA AND NAGAR HAVELI AND DAMAN AND DIU ---
    { name: 'Daman', lat: 20.4208, lon: 72.8687, state: 'Dadra & Nagar Haveli' },
    { name: 'Diu', lat: 20.7196, lon: 70.9290, state: 'Dadra & Nagar Haveli' },
    { name: 'Silvassa', lat: 20.2763, lon: 72.9991, state: 'Dadra & Nagar Haveli' },

    // --- DELHI ---
    { name: 'New Delhi', lat: 28.6139, lon: 77.2090, state: 'Delhi' },
    { name: 'North Delhi', lat: 28.6692, lon: 77.1250, state: 'Delhi' },
    { name: 'South Delhi', lat: 28.4817, lon: 77.1873, state: 'Delhi' },
    { name: 'East Delhi', lat: 28.6253, lon: 77.3060, state: 'Delhi' },
    { name: 'West Delhi', lat: 28.6475, lon: 77.1663, state: 'Delhi' },

    // --- GOA ---
    { name: 'Panaji', lat: 15.4909, lon: 73.8278, state: 'Goa' },
    { name: 'Margao', lat: 15.2707, lon: 73.9520, state: 'Goa' },
    { name: 'Vasco da Gama', lat: 15.3857, lon: 73.8340, state: 'Goa' },
    { name: 'Mapusa', lat: 15.5937, lon: 73.8142, state: 'Goa' },

    // --- GUJARAT ---
    { name: 'Ahmedabad', lat: 23.0225, lon: 72.5714, state: 'Gujarat' },
    { name: 'Surat', lat: 21.1702, lon: 72.8311, state: 'Gujarat' },
    { name: 'Vadodara', lat: 22.3072, lon: 73.1812, state: 'Gujarat' },
    { name: 'Rajkot', lat: 22.3039, lon: 70.8022, state: 'Gujarat' },
    { name: 'Bhavnagar', lat: 21.7568, lon: 72.1504, state: 'Gujarat' },
    { name: 'Jamnagar', lat: 22.4707, lon: 70.0577, state: 'Gujarat' },
    { name: 'Junagadh', lat: 21.5222, lon: 70.4579, state: 'Gujarat' },
    { name: 'Gandhinagar', lat: 23.2156, lon: 72.6369, state: 'Gujarat' },
    { name: 'Anand', lat: 22.5645, lon: 72.9289, state: 'Gujarat' },
    { name: 'Bharuch', lat: 21.7051, lon: 72.9959, state: 'Gujarat' },
    { name: 'Mehsana', lat: 23.5880, lon: 72.3693, state: 'Gujarat' },
    { name: 'Bhuj', lat: 23.2420, lon: 69.6669, state: 'Gujarat' },
    { name: 'Porbandar', lat: 21.6417, lon: 69.6293, state: 'Gujarat' },
    { name: 'Dwarka', lat: 22.2442, lon: 68.9685, state: 'Gujarat' },

    // --- HARYANA ---
    { name: 'Gurgaon', lat: 28.4595, lon: 77.0266, state: 'Haryana' },
    { name: 'Faridabad', lat: 28.4089, lon: 77.3178, state: 'Haryana' },
    { name: 'Panipat', lat: 29.3909, lon: 76.9635, state: 'Haryana' },
    { name: 'Ambala', lat: 30.3782, lon: 76.7800, state: 'Haryana' },
    { name: 'Rohtak', lat: 28.8955, lon: 76.6066, state: 'Haryana' },
    { name: 'Hisar', lat: 29.1492, lon: 75.7217, state: 'Haryana' },
    { name: 'Karnal', lat: 29.6857, lon: 76.9905, state: 'Haryana' },
    { name: 'Sonipat', lat: 28.9931, lon: 77.0151, state: 'Haryana' },
    { name: 'Panchkula', lat: 30.6942, lon: 76.8606, state: 'Haryana' },
    { name: 'Kurukshetra', lat: 29.9695, lon: 76.8783, state: 'Haryana' },

    // --- HIMACHAL PRADESH ---
    { name: 'Shimla', lat: 31.1048, lon: 77.1734, state: 'Himachal Pradesh' },
    { name: 'Dharamshala', lat: 32.2190, lon: 76.3234, state: 'Himachal Pradesh' },
    { name: 'Manali', lat: 32.2396, lon: 77.1887, state: 'Himachal Pradesh' },
    { name: 'Mandi', lat: 31.5892, lon: 76.9182, state: 'Himachal Pradesh' },
    { name: 'Solan', lat: 30.9084, lon: 77.0999, state: 'Himachal Pradesh' },
    { name: 'Kullu', lat: 31.9579, lon: 77.1095, state: 'Himachal Pradesh' },
    { name: 'Hamirpur', lat: 31.6841, lon: 76.5161, state: 'Himachal Pradesh' },
    { name: 'Chamba', lat: 32.5534, lon: 76.1258, state: 'Himachal Pradesh' },

    // --- JAMMU AND KASHMIR ---
    { name: 'Srinagar', lat: 34.0837, lon: 74.7973, state: 'Jammu & Kashmir' },
    { name: 'Jammu', lat: 32.7266, lon: 74.8570, state: 'Jammu & Kashmir' },
    { name: 'Anantnag', lat: 33.7311, lon: 75.1487, state: 'Jammu & Kashmir' },
    { name: 'Baramulla', lat: 34.1980, lon: 74.3636, state: 'Jammu & Kashmir' },
    { name: 'Leh', lat: 34.1491, lon: 77.5673, state: 'Ladakh' },
    { name: 'Kargil', lat: 34.5539, lon: 76.1349, state: 'Ladakh' },

    // --- JHARKHAND ---
    { name: 'Ranchi', lat: 23.3441, lon: 85.3096, state: 'Jharkhand' },
    { name: 'Jamshedpur', lat: 22.8046, lon: 86.2029, state: 'Jharkhand' },
    { name: 'Dhanbad', lat: 23.7957, lon: 86.4304, state: 'Jharkhand' },
    { name: 'Bokaro Steel City', lat: 23.6693, lon: 86.1511, state: 'Jharkhand' },
    { name: 'Deoghar', lat: 24.4826, lon: 86.6970, state: 'Jharkhand' },
    { name: 'Hazaribagh', lat: 23.9961, lon: 85.3197, state: 'Jharkhand' },

    // --- KARNATAKA ---
    { name: 'Bangalore', lat: 12.9716, lon: 77.5946, state: 'Karnataka' },
    { name: 'Mysore', lat: 12.2958, lon: 76.6394, state: 'Karnataka' },
    { name: 'Hubli', lat: 15.3647, lon: 75.1240, state: 'Karnataka' },
    { name: 'Mangalore', lat: 12.9141, lon: 74.8560, state: 'Karnataka' },
    { name: 'Belgaum', lat: 15.8497, lon: 74.4977, state: 'Karnataka' },
    { name: 'Gulbarga (Kalaburagi)', lat: 17.3297, lon: 76.8343, state: 'Karnataka' },
    { name: 'Davangere', lat: 14.4644, lon: 75.9218, state: 'Karnataka' },
    { name: 'Bellary', lat: 15.1394, lon: 76.9214, state: 'Karnataka' },
    { name: 'Shimoga', lat: 13.9299, lon: 75.5681, state: 'Karnataka' },
    { name: 'Tumkur', lat: 13.3379, lon: 77.1173, state: 'Karnataka' },
    { name: 'Udupi', lat: 13.3409, lon: 74.7421, state: 'Karnataka' },
    { name: 'Hassan', lat: 13.0033, lon: 76.1004, state: 'Karnataka' },
    { name: 'Bidar', lat: 17.9104, lon: 77.5199, state: 'Karnataka' },
    { name: 'Hospet', lat: 15.2689, lon: 76.3909, state: 'Karnataka' },

    // --- KERALA ---
    { name: 'Thiruvananthapuram', lat: 8.5241, lon: 76.9366, state: 'Kerala' },
    { name: 'Kochi', lat: 9.9312, lon: 76.2673, state: 'Kerala' },
    { name: 'Kozhikode', lat: 11.2588, lon: 75.7804, state: 'Kerala' },
    { name: 'Thrissur', lat: 10.5276, lon: 76.2144, state: 'Kerala' },
    { name: 'Kollam', lat: 8.8932, lon: 76.6141, state: 'Kerala' },
    { name: 'Alappuzha', lat: 9.4981, lon: 76.3388, state: 'Kerala' },
    { name: 'Palakkad', lat: 10.7867, lon: 76.6548, state: 'Kerala' },
    { name: 'Kannur', lat: 11.8745, lon: 75.3704, state: 'Kerala' },
    { name: 'Kottayam', lat: 9.5916, lon: 76.5222, state: 'Kerala' },

    // --- MADHYA PRADESH ---
    { name: 'Bhopal', lat: 23.2599, lon: 77.4126, state: 'Madhya Pradesh' },
    { name: 'Indore', lat: 22.7196, lon: 75.8577, state: 'Madhya Pradesh' },
    { name: 'Gwalior', lat: 26.2183, lon: 78.1828, state: 'Madhya Pradesh' },
    { name: 'Jabalpur', lat: 23.1815, lon: 79.9864, state: 'Madhya Pradesh' },
    { name: 'Ujjain', lat: 23.1765, lon: 75.7885, state: 'Madhya Pradesh' },
    { name: 'Sagar', lat: 23.8388, lon: 78.7378, state: 'Madhya Pradesh' },
    { name: 'Dewas', lat: 22.9676, lon: 76.0534, state: 'Madhya Pradesh' },
    { name: 'Satna', lat: 24.6005, lon: 80.8322, state: 'Madhya Pradesh' },
    { name: 'Ratlam', lat: 23.3315, lon: 75.0367, state: 'Madhya Pradesh' },
    { name: 'Rewa', lat: 24.5362, lon: 81.3037, state: 'Madhya Pradesh' },

    // --- MAHARASHTRA ---
    { name: 'Mumbai', lat: 19.0760, lon: 72.8777, state: 'Maharashtra' },
    { name: 'Pune', lat: 18.5204, lon: 73.8567, state: 'Maharashtra' },
    { name: 'Nagpur', lat: 21.1458, lon: 79.0882, state: 'Maharashtra' },
    { name: 'Nashik', lat: 19.9975, lon: 73.7898, state: 'Maharashtra' },
    { name: 'Aurangabad', lat: 19.8762, lon: 75.3433, state: 'Maharashtra' },
    { name: 'Solapur', lat: 17.6599, lon: 75.9064, state: 'Maharashtra' },
    { name: 'Thane', lat: 19.2183, lon: 72.9780, state: 'Maharashtra' },
    { name: 'Amravati', lat: 20.9374, lon: 77.7796, state: 'Maharashtra' },
    { name: 'Kolhapur', lat: 16.7050, lon: 74.2433, state: 'Maharashtra' },
    { name: 'Akola', lat: 20.7002, lon: 77.0082, state: 'Maharashtra' },
    { name: 'Latur', lat: 18.4088, lon: 76.5604, state: 'Maharashtra' },
    { name: 'Dhule', lat: 20.9042, lon: 74.7749, state: 'Maharashtra' },
    { name: 'Ahmednagar', lat: 19.0948, lon: 74.7480, state: 'Maharashtra' },
    { name: 'Chandrapur', lat: 19.9615, lon: 79.2961, state: 'Maharashtra' },
    { name: 'Parbhani', lat: 19.2644, lon: 76.6413, state: 'Maharashtra' },
    { name: 'Jalgaon', lat: 21.0077, lon: 75.5626, state: 'Maharashtra' },
    { name: 'Nanded', lat: 19.1383, lon: 77.3210, state: 'Maharashtra' },

    // --- MANIPUR ---
    { name: 'Imphal', lat: 24.8170, lon: 93.9368, state: 'Manipur' },
    { name: 'Thoubal', lat: 24.6421, lon: 93.9961, state: 'Manipur' },
    { name: 'Bishnupur', lat: 24.6300, lon: 93.7600, state: 'Manipur' },

    // --- MEGHALAYA ---
    { name: 'Shillong', lat: 25.5788, lon: 91.8933, state: 'Meghalaya' },
    { name: 'Tura', lat: 25.5132, lon: 90.2076, state: 'Meghalaya' },
    { name: 'Jowai', lat: 25.4485, lon: 92.1979, state: 'Meghalaya' },

    // --- MIZORAM ---
    { name: 'Aizawl', lat: 23.7271, lon: 92.7176, state: 'Mizoram' },
    { name: 'Lunglei', lat: 22.8895, lon: 92.7431, state: 'Mizoram' },

    // --- NAGALAND ---
    { name: 'Kohima', lat: 25.6701, lon: 94.1077, state: 'Nagaland' },
    { name: 'Dimapur', lat: 25.9095, lon: 93.7266, state: 'Nagaland' },
    { name: 'Mokokchung', lat: 26.3247, lon: 94.5161, state: 'Nagaland' },

    // --- ODISHA ---
    { name: 'Bhubaneswar', lat: 20.2961, lon: 85.8245, state: 'Odisha' },
    { name: 'Cuttack', lat: 20.4625, lon: 85.8828, state: 'Odisha' },
    { name: 'Rourkela', lat: 22.2604, lon: 84.8536, state: 'Odisha' },
    { name: 'Berhampur', lat: 19.3150, lon: 84.7941, state: 'Odisha' },
    { name: 'Sambalpur', lat: 21.4669, lon: 83.9812, state: 'Odisha' },
    { name: 'Puri', lat: 19.8135, lon: 85.8312, state: 'Odisha' },
    { name: 'Balasore', lat: 21.4942, lon: 86.9317, state: 'Odisha' },
    { name: 'Bhadrak', lat: 21.0574, lon: 86.4993, state: 'Odisha' },
    { name: 'Baripada', lat: 21.9333, lon: 86.7333, state: 'Odisha' },

    // --- PUNJAB ---
    { name: 'Ludhiana', lat: 30.9010, lon: 75.8573, state: 'Punjab' },
    { name: 'Amritsar', lat: 31.6340, lon: 74.8723, state: 'Punjab' },
    { name: 'Jalandhar', lat: 31.3260, lon: 75.5762, state: 'Punjab' },
    { name: 'Patiala', lat: 30.3398, lon: 76.3869, state: 'Punjab' },
    { name: 'Bathinda', lat: 30.2110, lon: 74.9455, state: 'Punjab' },
    { name: 'Mohali', lat: 30.7046, lon: 76.7179, state: 'Punjab' },
    { name: 'Pathankot', lat: 32.2643, lon: 75.6497, state: 'Punjab' },
    { name: 'Hoshiarpur', lat: 31.5143, lon: 75.9115, state: 'Punjab' },

    // --- RAJASTHAN ---
    { name: 'Jaipur', lat: 26.9124, lon: 75.7873, state: 'Rajasthan' },
    { name: 'Jodhpur', lat: 26.2389, lon: 73.0243, state: 'Rajasthan' },
    { name: 'Kota', lat: 25.2138, lon: 75.8648, state: 'Rajasthan' },
    { name: 'Bikaner', lat: 28.0229, lon: 73.3119, state: 'Rajasthan' },
    { name: 'Ajmer', lat: 26.4499, lon: 74.6399, state: 'Rajasthan' },
    { name: 'Udaipur', lat: 24.5854, lon: 73.7125, state: 'Rajasthan' },
    { name: 'Bhilwara', lat: 25.3407, lon: 74.6313, state: 'Rajasthan' },
    { name: 'Alwar', lat: 27.5530, lon: 76.6346, state: 'Rajasthan' },
    { name: 'Bharatpur', lat: 27.2152, lon: 77.5030, state: 'Rajasthan' },
    { name: 'Sikar', lat: 27.6094, lon: 75.1398, state: 'Rajasthan' },
    { name: 'Pali', lat: 25.7711, lon: 73.3234, state: 'Rajasthan' },
    { name: 'Sri Ganganagar', lat: 29.9045, lon: 73.8776, state: 'Rajasthan' },

    // --- SIKKIM ---
    { name: 'Gangtok', lat: 27.3389, lon: 88.6065, state: 'Sikkim' },
    { name: 'Namchi', lat: 27.1664, lon: 88.3517, state: 'Sikkim' },
    { name: 'Geyzing', lat: 27.3000, lon: 88.2333, state: 'Sikkim' },

    // --- TAMIL NADU ---
    { name: 'Chennai', lat: 13.0827, lon: 80.2707, state: 'Tamil Nadu' },
    { name: 'Coimbatore', lat: 11.0168, lon: 76.9558, state: 'Tamil Nadu' },
    { name: 'Madurai', lat: 9.9252, lon: 78.1198, state: 'Tamil Nadu' },
    { name: 'Tiruchirappalli', lat: 10.7905, lon: 78.7047, state: 'Tamil Nadu' },
    { name: 'Salem', lat: 11.6643, lon: 78.1460, state: 'Tamil Nadu' },
    { name: 'Tirunelveli', lat: 8.7139, lon: 77.7567, state: 'Tamil Nadu' },
    { name: 'Erode', lat: 11.3410, lon: 77.7172, state: 'Tamil Nadu' },
    { name: 'Vellore', lat: 12.9165, lon: 79.1325, state: 'Tamil Nadu' },
    { name: 'Tiruppur', lat: 11.1085, lon: 77.3411, state: 'Tamil Nadu' },
    { name: 'Thanjavur', lat: 10.7870, lon: 79.1378, state: 'Tamil Nadu' },
    { name: 'Thoothukudi', lat: 8.7642, lon: 78.1348, state: 'Tamil Nadu' },
    { name: 'Nagercoil', lat: 8.1833, lon: 77.4119, state: 'Tamil Nadu' },
    { name: 'Kanchipuram', lat: 12.8185, lon: 79.7036, state: 'Tamil Nadu' },
    { name: 'Rameswaram', lat: 9.2876, lon: 79.3129, state: 'Tamil Nadu' },

    // --- TELANGANA ---
    { name: 'Hyderabad', lat: 17.3850, lon: 78.4867, state: 'Telangana' },
    { name: 'Warangal', lat: 17.9689, lon: 79.5941, state: 'Telangana' },
    { name: 'Nizamabad', lat: 18.6725, lon: 78.0941, state: 'Telangana' },
    { name: 'Karimnagar', lat: 18.4386, lon: 79.1288, state: 'Telangana' },
    { name: 'Ramagundam', lat: 18.7618, lon: 79.4756, state: 'Telangana' },
    { name: 'Khammam', lat: 17.2473, lon: 80.1514, state: 'Telangana' },
    { name: 'Mahbubnagar', lat: 16.7488, lon: 78.0035, state: 'Telangana' },
    { name: 'Nalgonda', lat: 17.0577, lon: 79.2688, state: 'Telangana' },
    { name: 'Adilabad', lat: 19.6760, lon: 78.5320, state: 'Telangana' },
    { name: 'Suryapet', lat: 17.1439, lon: 79.6239, state: 'Telangana' },

    // --- TRIPURA ---
    { name: 'Agartala', lat: 23.8315, lon: 91.2868, state: 'Tripura' },
    { name: 'Udaipur', lat: 23.5350, lon: 91.4880, state: 'Tripura' },
    { name: 'Dharmanagar', lat: 24.3726, lon: 92.1643, state: 'Tripura' },

    // --- UTTAR PRADESH ---
    { name: 'Lucknow', lat: 26.8467, lon: 80.9462, state: 'Uttar Pradesh' },
    { name: 'Kanpur', lat: 26.4499, lon: 80.3319, state: 'Uttar Pradesh' },
    { name: 'Agra', lat: 27.1767, lon: 78.0081, state: 'Uttar Pradesh' },
    { name: 'Varanasi', lat: 25.3176, lon: 82.9739, state: 'Uttar Pradesh' },
    { name: 'Allahabad (Prayagraj)', lat: 25.4358, lon: 81.8463, state: 'Uttar Pradesh' },
    { name: 'Meerut', lat: 28.9845, lon: 77.7064, state: 'Uttar Pradesh' },
    { name: 'Ghaziabad', lat: 28.6692, lon: 77.4538, state: 'Uttar Pradesh' },
    { name: 'Noida', lat: 28.5355, lon: 77.3910, state: 'Uttar Pradesh' },
    { name: 'Aligarh', lat: 27.8974, lon: 78.0880, state: 'Uttar Pradesh' },
    { name: 'Bareilly', lat: 28.3670, lon: 79.4304, state: 'Uttar Pradesh' },
    { name: 'Moradabad', lat: 28.8386, lon: 78.7733, state: 'Uttar Pradesh' },
    { name: 'Saharanpur', lat: 29.9640, lon: 77.5460, state: 'Uttar Pradesh' },
    { name: 'Gorakhpur', lat: 26.7606, lon: 83.3732, state: 'Uttar Pradesh' },
    { name: 'Jhansi', lat: 25.4484, lon: 78.5685, state: 'Uttar Pradesh' },
    { name: 'Mathura', lat: 27.4924, lon: 77.6737, state: 'Uttar Pradesh' },
    { name: 'Ayodhya', lat: 26.7993, lon: 82.1998, state: 'Uttar Pradesh' },
    { name: 'Muzaffarnagar', lat: 29.4727, lon: 77.7085, state: 'Uttar Pradesh' },
    { name: 'Firozabad', lat: 27.1502, lon: 78.3976, state: 'Uttar Pradesh' },

    // --- UTTARAKHAND ---
    { name: 'Dehradun', lat: 30.3165, lon: 78.0322, state: 'Uttarakhand' },
    { name: 'Haridwar', lat: 29.9457, lon: 78.1642, state: 'Uttarakhand' },
    { name: 'Roorkee', lat: 29.8543, lon: 77.8880, state: 'Uttarakhand' },
    { name: 'Haldwani', lat: 29.2183, lon: 79.5130, state: 'Uttarakhand' },
    { name: 'Rudrapur', lat: 28.9733, lon: 79.4000, state: 'Uttarakhand' },
    { name: 'Nainital', lat: 29.3919, lon: 79.4542, state: 'Uttarakhand' },
    { name: 'Rishikesh', lat: 30.0869, lon: 78.2676, state: 'Uttarakhand' },
    { name: 'Mussoorie', lat: 30.4599, lon: 78.0664, state: 'Uttarakhand' },

    // --- WEST BENGAL ---
    { name: 'Kolkata', lat: 22.5726, lon: 88.3639, state: 'West Bengal' },
    { name: 'Howrah', lat: 22.5958, lon: 88.2636, state: 'West Bengal' },
    { name: 'Siliguri', lat: 26.7271, lon: 88.3953, state: 'West Bengal' },
    { name: 'Durgapur', lat: 23.5204, lon: 87.3119, state: 'West Bengal' },
    { name: 'Asansol', lat: 23.6739, lon: 86.9524, state: 'West Bengal' },
    { name: 'Bardhaman', lat: 23.2324, lon: 87.8615, state: 'West Bengal' },
    { name: 'Malda', lat: 25.0108, lon: 88.1411, state: 'West Bengal' },
    { name: 'Kharagpur', lat: 22.3460, lon: 87.2320, state: 'West Bengal' },
    { name: 'Haldia', lat: 22.0624, lon: 88.0626, state: 'West Bengal' },
    { name: 'Darjeeling', lat: 27.0360, lon: 88.2627, state: 'West Bengal' },
    { name: 'Cooch Behar', lat: 26.3262, lon: 89.4533, state: 'West Bengal' },
];
