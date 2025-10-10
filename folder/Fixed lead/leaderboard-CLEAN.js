// CLEAN LEADERBOARD JAVASCRIPT - NO DOTS OR SEPARATORS
console.log('🚀 Loading Clean Leaderboard...');

// Simple user data array
const leaderboardUsers = [
  { rank: 1, name: 'Arjun Sharma', username: '@arjun_codes', userId: 'USR001', rating: 2847, improvement: 12, avatar: 'AS' },
  { rank: 2, name: 'Priya Patel', username: '@priya_algo', userId: 'USR002', rating: 2634, improvement: 8, avatar: 'PP' },
  { rank: 3, name: 'Rahul Singh', username: '@rahul_dev', userId: 'USR003', rating: 2521, improvement: 15, avatar: 'RS' },
  { rank: 4, name: 'Ananya Gupta', username: '@ananya_cp', userId: 'USR004', rating: 2398, improvement: -2, avatar: 'AG' },
  { rank: 5, name: 'Vikram Reddy', username: '@vikram_code', userId: 'USR005', rating: 2287, improvement: 6, avatar: 'VR' },
  { rank: 6, name: 'Sneha Iyer', username: '@sneha_tech', userId: 'USR006', rating: 2156, improvement: 4, avatar: 'SI' },
  { rank: 7, name: 'Karthik Nair', username: '@karthik_algo', userId: 'USR007', rating: 2098, improvement: 9, avatar: 'KN' },
  { rank: 8, name: 'Divya Joshi', username: '@divya_codes', userId: 'USR008', rating: 1987, improvement: -1, avatar: 'DJ' },
  { rank: 9, name: 'Rohit Kumar', username: '@rohit_cp', userId: 'USR009', rating: 1923, improvement: 11, avatar: 'RK' },
  { rank: 10, name: 'Meera Shah', username: '@meera_dev', userId: 'USR010', rating: 1876, improvement: 3, avatar: 'MS' },
  { rank: 11, name: 'Amit Verma', username: '@amit_java', userId: 'USR011', rating: 1834, improvement: 7, avatar: 'AV' },
  { rank: 12, name: 'Pooja Agarwal', username: '@pooja_py', userId: 'USR012', rating: 1792, improvement: -3, avatar: 'PA' },
  { rank: 13, name: 'Sanjay Mehta', username: '@sanjay_ml', userId: 'USR013', rating: 1756, improvement: 2, avatar: 'SM' },
  { rank: 14, name: 'Kavya Rao', username: '@kavya_react', userId: 'USR014', rating: 1723, improvement: 10, avatar: 'KR' },
  { rank: 15, name: 'Deepak Jain', username: '@deepak_ds', userId: 'USR015', rating: 1689, improvement: -4, avatar: 'DJ2' },
  { rank: 42, name: 'Chhota Bheem', username: '@chhotabheem', userId: 'USR042', rating: 1420, improvement: 5, avatar: 'CB', isCurrentUser: true }
];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('📋 Initializing clean leaderboard...');

  // Load leaderboard immediately
  displayLeaderboard();

  // Setup other functions
  setupMenu();
  setupSorting();
  startClock();

  console.log('✅ Clean leaderboard loaded successfully!');
});

// MAIN FUNCTION - Display leaderboard with NO SEPARATORS OR DOTS
function displayLeaderboard() {
  console.log('📊 Displaying leaderboard...');

  const listContainer = document.getElementById('leaderboardList');
  if (!listContainer) {
    console.error('❌ Leaderboard list container not found!');
    return;
  }

  // Clear existing content
  listContainer.innerHTML = '';

  // Show ALL users directly - NO SEPARATORS, NO DOTS
  leaderboardUsers.forEach(user => {
    const userElement = createUserElement(user);
    listContainer.appendChild(userElement);
  });

  console.log(`✅ Displayed ${leaderboardUsers.length} users directly`);
}

// Create individual user element
function createUserElement(user) {
  const element = document.createElement('div');
  element.className = `leaderboard-item ${user.isCurrentUser ? 'current-user' : ''}`;

  // Rank styling based on position
  let rankClass = 'regular';
  let medal = '';
  if (user.rank === 1) { rankClass = 'gold'; medal = '🥇'; }
  else if (user.rank === 2) { rankClass = 'silver'; medal = '🥈'; }
  else if (user.rank === 3) { rankClass = 'bronze'; medal = '🥉'; }

  // Improvement styling
  const improvementClass = user.improvement > 0 ? 'positive' : 
                          user.improvement < 0 ? 'negative' : 'neutral';
  const improvementText = user.improvement > 0 ? `+${user.improvement}%` : 
                         user.improvement < 0 ? `${user.improvement}%` : '0%';

  // Progress status
  const progressText = user.improvement > 0 ? '📈 Rising' : 
                      user.improvement < 0 ? '📉 Falling' : '➡️ Stable';

  element.innerHTML = `
    <div class="rank ${rankClass}">
      <span class="rank-number">#${user.rank}</span>
      ${medal ? `<span class="rank-medal">${medal}</span>` : ''}
    </div>
    <div class="player-info">
      <div class="player-avatar">${user.avatar}</div>
      <div class="player-details">
        <div class="player-name">${user.name}</div>
        <div class="player-username">${user.username}</div>
        <div class="player-userid">ID: ${user.userId}</div>
      </div>
    </div>
    <div class="score">
      <div class="score-value">${user.rating.toLocaleString()}</div>
      <div class="score-improvement ${improvementClass}">${improvementText}</div>
    </div>
    <div class="progress">
      <span class="progress-badge">${progressText}</span>
    </div>
  `;

  // Add click event
  element.addEventListener('click', function() {
    const message = `👤 ${user.name}\n📧 ${user.username}\n🆔 ${user.userId}\n🏆 Rank: #${user.rank}\n📊 Rating: ${user.rating.toLocaleString()}\n📈 Improvement: ${improvementText}`;

    if (user.isCurrentUser) {
      alert(`🎯 This is your profile!\n\n${message}`);
    } else {
      alert(message);
    }
  });

  return element;
}

// Simple menu setup
function setupMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const menuDropdown = document.getElementById('menuDropdown');

  if (!menuBtn || !menuDropdown) {
    console.log('⚠️ Menu elements not found');
    return;
  }

  let isMenuOpen = false;

  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      menuDropdown.classList.add('show');
      menuBtn.classList.add('active');
    } else {
      menuDropdown.classList.remove('show');
      menuBtn.classList.remove('active');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
      if (isMenuOpen) {
        menuDropdown.classList.remove('show');
        menuBtn.classList.remove('active');
        isMenuOpen = false;
      }
    }
  });

  console.log('📋 Menu setup complete');
}

// Sorting functionality
function setupSorting() {
  const sortSelect = document.getElementById('sortBy');
  const scoreHeader = document.getElementById('scoreHeader');
  const currentUserRank = document.getElementById('currentUserRank');

  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      const sortValue = this.value;

      if (sortValue === 'improvement_percentage') {
        // Sort by improvement percentage
        leaderboardUsers.sort((a, b) => b.improvement - a.improvement);

        // Update ranks after sorting
        leaderboardUsers.forEach((user, index) => {
          user.rank = index + 1;
        });

        // Update header text
        if (scoreHeader) scoreHeader.textContent = 'Improvement %';

        // Update current user rank (Chhota Bheem moves to rank 9 in improvement sorting)
        if (currentUserRank) currentUserRank.textContent = '#9';

      } else {
        // Reset to contest ratings order
        leaderboardUsers.sort((a, b) => b.rating - a.rating);

        // Reset original ranks
        const originalRanks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,42];
        leaderboardUsers.forEach((user, index) => {
          user.rank = originalRanks[index];
        });

        // Update header text
        if (scoreHeader) scoreHeader.textContent = 'Contest Rating';

        // Reset current user rank
        if (currentUserRank) currentUserRank.textContent = '#42';
      }

      // Redisplay leaderboard
      displayLeaderboard();
    });
  }

  console.log('🔄 Sorting setup complete');
}

// Simple clock
function startClock() {
  const timeElement = document.getElementById('currentTime');
  const dateElement = document.getElementById('currentDate');

  function updateTime() {
    const now = new Date();

    if (timeElement) {
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      timeElement.textContent = timeString;
    }

    if (dateElement) {
      const dateString = now.toLocaleDateString('en-US', { 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric' 
      });
      dateElement.textContent = dateString;
    }
  }

  updateTime();
  setInterval(updateTime, 60000);

  console.log('⏰ Clock started');
}

console.log('✅ Clean Leaderboard JavaScript Loaded - NO DOTS!');