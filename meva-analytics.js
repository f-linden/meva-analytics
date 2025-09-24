// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeLucideIcons();
    initializeNavigation();
    initializeCharts();
    initializeSidebar();
});

// ==================== LUCIDE ICONS ====================
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ==================== NAVIGATION SYSTEM ====================
const pages = {
    'dashboard': {
        title: 'Dashboard',
        description: 'Überblick über Ihre  Bestellplanungsleistung'
    },
    'reports': {
        title: 'Berichte', 
        description: 'Detaillierte Analysen und Einblicke'
    },
    'appointments': {
        title: 'Termine',
        description: 'Verwalten Sie Ihre Terminplanung'
    },
    'optimize': {
        title: 'Optimierung',
        description: 'Optimierungsempfehlungen'
    },
    'business-intelligence': {
        title: 'Business Intelligence',
        description: 'Erweiterte Geschäftsanalysen'
    },
    'customer-feedback': {
        title: 'Kundenfeedback',
        description: 'Kundenzufriedenheitsanalyse'
    },
    'revenue-analysis': {
        title: 'Umsatzanalyse',
        description: 'Umsatz- und Finanzanalysen'
    },
    'location-analytics': {
        title: 'Standortanalyse',
        description: 'Standortbasierte Leistungsmetriken'
    },
    'scheduling-traffic': {
        title: 'Bestellungen',
        description: 'Bestellsystem-Performance'
    },
    'integrations': {
        title: 'Integrationen',
        description: 'Drittanbieter-Integrationen'
    },
    'settings': {
        title: 'Mein Konto',
        description: 'Kontoeinstellungen und Präferenzen'
    }
};

let currentPage = 'dashboard';

function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            if (pageId && pages[pageId]) {
                switchToPage(pageId);
            }
        });
    });
}

function switchToPage(pageId) {
    if (currentPage === pageId) return;
    
    // Hide current page
    const currentPageElement = document.getElementById(currentPage);
    if (currentPageElement) {
        currentPageElement.classList.remove('active');
    }
    
    // Remove active from current nav item
    const currentNavItem = document.querySelector(`.nav-item[data-page="${currentPage}"]`);
    if (currentNavItem) {
        currentNavItem.classList.remove('active');
    }
    
    // Show new page
    const newPageElement = document.getElementById(pageId);
    if (newPageElement) {
        newPageElement.classList.add('active', 'fade-in');
        setTimeout(() => {
            newPageElement.classList.remove('fade-in');
        }, 300);
    }
    
    // Add active to new nav item
    const newNavItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
    if (newNavItem) {
        newNavItem.classList.add('active');
    }
    
    // Update header
    updatePageHeader(pageId);
    
    // Initialize page-specific functionality
    initializePageContent(pageId);
    
    currentPage = pageId;
}

function updatePageHeader(pageId) {
    const pageInfo = pages[pageId];
    if (pageInfo) {
        const titleElement = document.getElementById('page-title');
        const descriptionElement = document.getElementById('page-description');
        
        if (titleElement) titleElement.textContent = pageInfo.title;
        if (descriptionElement) descriptionElement.textContent = pageInfo.description;
    }
}

function initializePageContent(pageId) {
    switch(pageId) {
        case 'dashboard':
            initializeDashboardCharts();
            break;
        case 'reports':
            initializeReportsCharts();
            break;
        case 'appointments':
            initializeAppointmentsCharts();
            break;
        case 'business-intelligence':
            initializeBICharts();
            break;
        case 'customer-feedback':
            initializeFeedbackCharts();
            break;
        case 'revenue-analysis':
            initializeRevenueCharts();
            break;
        case 'scheduling-traffic':
            initializeTrafficCharts();
            break;
    }
}

// ==================== SIDEBAR FUNCTIONALITY ====================
function initializeSidebar() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
}

// ==================== CHART CONFIGURATIONS ====================
Chart.defaults.color = '#94A3B8';
Chart.defaults.borderColor = '#374151';
Chart.defaults.backgroundColor = '#1E293B';

const chartColors = {
    primary: '#3B82F6',
    success: '#22C55E', 
    warning: '#F59E0B',
    danger: '#EF4444',
    secondary: '#94A3B8',
    dark: '#1E293B'
};

const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: '#94A3B8',
                font: { size: 12, weight: 500 },
                padding: 20,
                usePointStyle: true
            }
        },
        tooltip: {
            backgroundColor: '#1E293B',
            titleColor: '#FFFFFF',
            bodyColor: '#94A3B8',
            borderColor: '#374151',
            borderWidth: 1,
            cornerRadius: 8
        }
    },
    scales: {
        x: {
            grid: { color: '#374151', drawBorder: false },
            ticks: { color: '#94A3B8', font: { size: 11, weight: 500 } }
        },
        y: {
            grid: { color: '#374151', drawBorder: false },
            ticks: { color: '#94A3B8', font: { size: 11, weight: 500 } }
        }
    }
};

// ==================== CHART DATA ====================
const chartData = {
    terminTrends: {
    labels: ['01.10', '02.10', '03.10', '04.10', '05.10', '06.10', '07.10', '08.10', '09.10', '10.10',
        '11.10', '12.10', '13.10', '14.10', '15.10', '16.10', '17.10', '18.10', '19.10', '20.10',
        '21.10', '22.10', '23.10', '24.10', '25.10', '26.10', '27.10', '28.10', '29.10', '30.10', '31.10'],
        datasets: [{
            label: 'Bestellungen',
            data: [67, 82, 76, 91, 88, 95, 103, 87, 92, 98, 105, 89, 93, 101, 96, 108, 94, 99, 112, 106, 
                   98, 104, 89, 67, 45, 78, 102, 97, 109, 105, 80],
            borderColor: chartColors.primary,
            backgroundColor: chartColors.primary + '20',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    
    servicePerformance: {
        labels: ['AluFix', 'AluStar', 'StarTec XT', 'VarioMax', 'Mammut XT', 'MevaDec'],
        datasets: [{
            label: 'Buchungsrate (%)',
            data: [25, 40, 94, 59, 70, 96],
            backgroundColor: [
                chartColors.primary,
                chartColors.success,
                chartColors.warning,
                chartColors.danger,
                chartColors.secondary,
                '#8B5CF6'
            ],
            borderWidth: 0
        }]
    },
    
    weeklyPerformance: {
        labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
        datasets: [{
            label: 'Anzahl',
            data: [125, 142, 138, 156, 148, 98, 67],
            borderColor: chartColors.primary,
            backgroundColor: chartColors.primary + '20',
            borderWidth: 3,
            fill: true
        }, {
            label: 'Umsatz (€)',
            data: [19500, 22130, 21528, 24336, 23088, 15288, 10450],
            borderColor: chartColors.success,
            backgroundColor: chartColors.success + '20',
            borderWidth: 3,
            fill: true,
            yAxisID: 'y1'
        }]
    },
    
    monthlyTrends: {
        labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        datasets: [{
            label: 'Buchungsrate (%)',
            data: [78, 82, 85, 88, 91, 89, 92, 94, 90, 87, 89, 92],
            borderColor: chartColors.primary,
            backgroundColor: chartColors.primary + '20',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    
    utilizationData: {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
        datasets: [{
            label: 'Auslastung (%)',
            data: [65, 89, 78, 92, 45, 67, 98, 87, 94, 76, 56],
            backgroundColor: function(context) {
                const value = context.parsed.y;
                if (value >= 90) return chartColors.success;
                if (value >= 70) return chartColors.warning;
                return chartColors.danger;
            },
            borderWidth: 0
        }]
    },
    
    servicesDistribution: {
        labels: ['AluFix', 'AluStar', 'StarTec XT', 'VarioMax', 'Mammut XT', 'MevaDec', 'Sonstiges'],
        datasets: [{
            data: [28, 18, 15, 12, 11, 10, 6],
            backgroundColor: [
                chartColors.primary,
                chartColors.success,
                chartColors.warning,
                chartColors.danger,
                chartColors.secondary,
                '#8B5CF6',
                '#EC4899'
            ],
            borderWidth: 0
        }]
    },
    
    predictiveAnalytics: {
        labels: ['Jan 24', 'Feb 24', 'Mär 24', 'Apr 24', 'Mai 24', 'Jun 24', 'Jul 24', 'Aug 24', 'Sep 24'],
        datasets: [{
            label: 'Historische Daten',
            data: [2400, 2650, 2890, 3100, 2950, 3200, 3400, 3650, 3800],
            borderColor: chartColors.primary,
            backgroundColor: chartColors.primary + '20',
            borderWidth: 3,
            fill: true
        }, {
            label: 'Prognose',
            data: [null, null, null, null, null, null, 3400, 3750, 4100],
            borderColor: chartColors.warning,
            backgroundColor: chartColors.warning + '20',
            borderWidth: 3,
            borderDash: [5, 5],
            fill: true
        }]
    },
    
    customerLifetimeValue: {
        labels: ['Neukunden', '2-5 Besuche', '6-10 Besuche', '11-20 Besuche', '20+ Besuche'],
        datasets: [{
            label: 'Durchschn. CLV (€)',
            data: [156, 420, 890, 1650, 3200],
            backgroundColor: [
                chartColors.danger,
                chartColors.warning,
                chartColors.secondary,
                chartColors.primary,
                chartColors.success
            ],
            borderWidth: 0
        }]
    },
    
    feedbackTrends: {
        labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        datasets: [{
            label: 'Durchschnittsbewertung',
            data: [4.2, 4.3, 4.5, 4.4, 4.6, 4.7, 4.8, 4.7, 4.8, 4.9, 4.8, 4.8],
            borderColor: chartColors.success,
            backgroundColor: chartColors.success + '20',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }, {
            label: 'Response Rate (%)',
            data: [76, 78, 82, 85, 87, 89, 90, 91, 92, 94, 93, 92],
            borderColor: chartColors.primary,
            backgroundColor: chartColors.primary + '20',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            yAxisID: 'y1'
        }]
    },
    
    revenueTrends: {
        labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        datasets: [{
            label: 'Monatsumsatz (€)',
            data: [387500, 425600, 456700, 423800, 478900, 495300, 512400, 498700, 534200, 567800, 589400, 612300],
            borderColor: chartColors.primary,
            backgroundColor: chartColors.primary + '20',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }, {
            label: 'Gewinn (€)',
            data: [116250, 127680, 137010, 127140, 143670, 148590, 153720, 149610, 160260, 170340, 176820, 183690],
            borderColor: chartColors.success,
            backgroundColor: chartColors.success + '20',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    
    trafficPerformance: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [{
            label: 'Bestellanfragen',
            data: [45, 23, 187, 245, 198, 89],
            borderColor: chartColors.primary,
            backgroundColor: chartColors.primary + '20',
            borderWidth: 3,
            fill: true
        }, {
            label: 'Erfolgreiche Bestellungen',
            data: [38, 19, 162, 213, 172, 76],
            borderColor: chartColors.success,
            backgroundColor: chartColors.success + '20',
            borderWidth: 3,
            fill: true
        }]
    }
};

// ==================== CHART INITIALIZATION ====================
let chartInstances = {};

function initializeCharts() {
    // Initialize Dashboard charts on load
    setTimeout(() => {
        initializeDashboardCharts();
    }, 100);
}

function initializeDashboardCharts() {
    // Trends Chart
    const trendsCtx = document.getElementById('dashboard-trends-chart');
    if (trendsCtx && !chartInstances['dashboard-trends']) {
        chartInstances['dashboard-trends'] = new Chart(trendsCtx, {
            type: 'line',
            data: chartData.terminTrends,
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y} Bestellungen`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Service Performance Chart
    const serviceCtx = document.getElementById('dashboard-service-chart');
    if (serviceCtx && !chartInstances['dashboard-service']) {
        chartInstances['dashboard-service'] = new Chart(serviceCtx, {
            type: 'doughnut',
            data: chartData.servicePerformance,
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Locations Chart
    const locationsCtx = document.getElementById('dashboard-locations-chart');
    if (locationsCtx && !chartInstances['dashboard-locations']) {
        chartInstances['dashboard-locations'] = new Chart(locationsCtx, {
            type: 'bar',
            data: {
                labels: ['Stuttgart', 'München', 'Berlin', 'Hannover', 'Rhein/Ruhr'],
                datasets: [{
                    label: 'Bestellungen',
                    data: [1247, 892, 1156, 734, 978],
                    backgroundColor: chartColors.primary,
                    borderWidth: 0
                }, {
                    label: 'Umsatz (€)',
                    data: [195, 139, 180, 114, 152],
                    backgroundColor: chartColors.success,
                    borderWidth: 0
                }]
            },
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const suffix = context.datasetIndex === 0 ? ' Bestellungen' : '€';
                                return `${context.dataset.label}: ${context.parsed.y}${suffix}`;
                            }
                        }
                    }
                }
            }
        });
    }
}

function initializeReportsCharts() {
    // Weekly Performance Chart
    const weeklyCtx = document.getElementById('reports-weekly-chart');
    if (weeklyCtx && !chartInstances['reports-weekly']) {
        chartInstances['reports-weekly'] = new Chart(weeklyCtx, {
            type: 'line',
            data: chartData.weeklyPerformance,
            options: {
                ...commonChartOptions,
                scales: {
                    ...commonChartOptions.scales,
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: { drawOnChartArea: false },
                        ticks: { 
                            color: '#94A3B8', 
                            font: { size: 11, weight: 500 },
                            callback: function(value) {
                                return value.toLocaleString('de-DE') + '€';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Monthly Trends Chart
    const monthlyCtx = document.getElementById('reports-monthly-chart');
    if (monthlyCtx && !chartInstances['reports-monthly']) {
        chartInstances['reports-monthly'] = new Chart(monthlyCtx, {
            type: 'line',
            data: chartData.monthlyTrends,
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                }
            }
        });
    }
}

function initializeAppointmentsCharts() {
    // Utilization Chart
    const utilizationCtx = document.getElementById('appointments-utilization-chart');
    if (utilizationCtx && !chartInstances['appointments-utilization']) {
        chartInstances['appointments-utilization'] = new Chart(utilizationCtx, {
            type: 'bar',
            data: chartData.utilizationData,
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Services Distribution Chart
    const servicesCtx = document.getElementById('appointments-services-chart');
    if (servicesCtx && !chartInstances['appointments-services']) {
        chartInstances['appointments-services'] = new Chart(servicesCtx, {
            type: 'pie',
            data: chartData.servicesDistribution,
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                }
            }
        });
    }
}

function initializeBICharts() {
    // Predictive Analytics Chart
    const predictiveCtx = document.getElementById('bi-predictive-chart');
    if (predictiveCtx && !chartInstances['bi-predictive']) {
        chartInstances['bi-predictive'] = new Chart(predictiveCtx, {
            type: 'line',
            data: chartData.predictiveAnalytics,
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y} Termine`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Customer Lifetime Value Chart
    const clvCtx = document.getElementById('bi-clv-chart');
    if (clvCtx && !chartInstances['bi-clv']) {
        chartInstances['bi-clv'] = new Chart(clvCtx, {
            type: 'bar',
            data: chartData.customerLifetimeValue,
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y.toLocaleString('de-DE')}€`;
                            }
                        }
                    }
                }
            }
        });
    }
}

function initializeFeedbackCharts() {
    const feedbackCtx = document.getElementById('feedback-trends-chart');
    if (feedbackCtx && !chartInstances['feedback-trends']) {
        chartInstances['feedback-trends'] = new Chart(feedbackCtx, {
            type: 'line',
            data: chartData.feedbackTrends,
            options: {
                ...commonChartOptions,
                scales: {
                    ...commonChartOptions.scales,
                    y: {
                        ...commonChartOptions.scales.y,
                        min: 0,
                        max: 5,
                        ticks: {
                            ...commonChartOptions.scales.y.ticks,
                            stepSize: 0.5
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: { drawOnChartArea: false },
                        ticks: { 
                            color: '#94A3B8', 
                            font: { size: 11, weight: 500 },
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        min: 0,
                        max: 100
                    }
                }
            }
        });
    }
}

function initializeRevenueCharts() {
    const revenueCtx = document.getElementById('revenue-trends-chart');
    if (revenueCtx && !chartInstances['revenue-trends']) {
        chartInstances['revenue-trends'] = new Chart(revenueCtx, {
            type: 'line',
            data: chartData.revenueTrends,
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y.toLocaleString('de-DE')}€`;
                            }
                        }
                    }
                },
                scales: {
                    ...commonChartOptions.scales,
                    y: {
                        ...commonChartOptions.scales.y,
                        ticks: {
                            ...commonChartOptions.scales.y.ticks,
                            callback: function(value) {
                                return (value / 1000).toLocaleString('de-DE') + 'K€';
                            }
                        }
                    }
                }
            }
        });
    }
}

function initializeTrafficCharts() {
    const trafficCtx = document.getElementById('traffic-performance-chart');
    if (trafficCtx && !chartInstances['traffic-performance']) {
        chartInstances['traffic-performance'] = new Chart(trafficCtx, {
            type: 'line',
            data: chartData.trafficPerformance,
            options: {
                ...commonChartOptions,
                plugins: {
                    ...commonChartOptions.plugins,
                    tooltip: {
                        ...commonChartOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y}`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// ==================== UTILITY FUNCTIONS ====================
function formatNumber(num) {
    return num.toLocaleString('de-DE');
}

function formatCurrency(num) {
    return num.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}

function formatPercentage(num) {
    return `${num.toFixed(1)}%`;
}

// ==================== RESPONSIVE HANDLING ====================
window.addEventListener('resize', function() {
    Object.values(chartInstances).forEach(chart => {
        if (chart && typeof chart.resize === 'function') {
            chart.resize();
        }
    });
});

// ==================== CLEANUP ====================
window.addEventListener('beforeunload', function() {
    Object.values(chartInstances).forEach(chart => {
        if (chart && typeof chart.destroy === 'function') {
            chart.destroy();
        }
    });
});

// ==================== EXPORT FOR EXTERNAL USE ====================
window.MevaAnalytics = {
    switchToPage,
    chartInstances,
    formatNumber,
    formatCurrency,
    formatPercentage,
    initializeCharts: initializeCharts
};